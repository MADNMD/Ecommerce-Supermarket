import React, { useContext, useEffect, useState } from "react";
import styles from './MyCart.module.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CartContext } from "../../../contexts/cartContext";
import { useAuthContext } from "../../../contexts/authContext";
import { ProfileContext } from "../../../contexts/profileContext";
import * as profileService from '../../../services/profileService';

export const MyCart = ({
    hideNavigationAndFooter,
}) => {

    const { userId } = useAuthContext();
    const { handleEditProfile } = useContext(ProfileContext);
    const { getUserCart, removeCart, updateCart } = useContext(CartContext);
    const userCart = getUserCart();
    const [count, setCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productCounts, setProductCounts] = useState({});
    const [toastShow, setToastShow] = useState(false);

    useEffect(() => {
        hideNavigationAndFooter();
    }, [hideNavigationAndFooter]);

    useEffect(() => {
        if (userCart.length === 0) {
            setTotalPrice(0);
            return;
        }

        let total = 0;
        const counts = {};

        const correctedCart = userCart.map(product => {
            if (product.unitQuantity >= 100 && product.count === 201 && (product.category === 'Зеленчуци и плодове' || product.selectedSubCategory === 'Месо' || product.selectedSubCategory === 'Риба')) {
                return { ...product, count: 200 };
            } else if (product.productName === "ДИНЯ кг /Гърция/" && product.count === 1) {
                return { ...product, count: 3000 };
            }
            return product;
        });

        correctedCart.forEach(product => {
            counts[product._id] = product.count;

            const price = product.productNewPrice !== null ? product.productNewPrice : product.productPrice;
            const unitPrice = product.unitQuantity >= 100 &&
                (product.selectedSubCategory === 'Зеленчуци' ||
                    product.selectedSubCategory === 'Плодове' ||
                    product.selectedSubCategory === 'Маслини' ||
                    product.selectedSubCategory === 'Месо' ||
                    product.selectedSubCategory === 'Риба') &&
                product.productName !== 'БИО ЧЕРИ ДОМАТИ "Моравско село" 200г'
                ? price * (1000 / product.unitQuantity)
                : price;

            if (product.count >= 100 && (product.category === 'Зеленчуци и плодове' || product.selectedSubCategory === 'Месо' || product.selectedSubCategory === 'Риба')) {
                total += (unitPrice * (product.count / 1000));
            } else {
                total += unitPrice * product.count;
            }

        });

        setTotalPrice(total);
        setProductCounts(counts);
        setCount(correctedCart.length);
    }, [userCart]);

    const updateTotalPrice = (product, newCount) => {

        let prevCount = productCounts[product._id];
        let newPriceChange;
        const price = product.productNewPrice !== null ? product.productNewPrice : product.productPrice;
        const unitPrice = product.unitQuantity >= 100 && (product.selectedSubCategory === 'Зеленчуци' || product.selectedSubCategory === 'Плодове' || product.selectedSubCategory === 'Маслини') &&
            product.productName !== 'БИО ЧЕРИ ДОМАТИ "Моравско село" 200г'
            ? price * (1000 / product.unitQuantity)
            : price;

        if (newCount >= 100) {
            newPriceChange = ((newCount - prevCount) * unitPrice) / 1000;
        } else {
            newPriceChange = (newCount - prevCount) * unitPrice;
        }

        setProductCounts(prevCounts => ({
            ...prevCounts,
            [product._id]: newCount
        }));

        const updatedCart = userCart.map(p => p._id === product._id ? { ...p, count: newCount } : p);
        updateCart(updatedCart);
    };

    const removeProductFromCart = async (productId) => {

        try {
            const user = await profileService.getUser(userId);
            const updatedCart = user.cart.filter(p => p._id !== productId);
            await handleEditProfile({ ...user, cart: updatedCart });
            setCount(updatedCart.length);
            removeCart(productId);
        } catch (error) {
            console.log('грешка в компонента с количката');
        }
    };

    const handleOrderClick = (event) => {

        if (userCart.length === 0) {
            event.preventDefault();
            toast.error('Количката за пазаруване все още е празна');
        } else {
            userCart.some(product => {

                if (product.count >= 100) {
                    product.count = product.count / 1000;
                }

                if (product.count > product.productQuantity) {
                    event.preventDefault();
                    toast.dismiss();
                    toast.error(`Не достатъчно количество на "${product.productName}" в склада`);
                    return
                }
            });
        }
    };

    return (
        <div className={styles['site-myCart']}>

            <div className={styles['myCart-logo']}>
                <Link to="/"><img src="./images/logo-2.png" alt="" /></Link>
            </div>
            <div className={styles.container}>
                <div className={styles['myCart-product']}>
                    <h3>Моята количка</h3>
                    {userCart.length === 0 ? (
                        <p>Кошницата за пазаруване е празна.</p>
                    ) : (
                        <table className={styles['myCart-table']}>
                            <thead>
                                <tr>
                                    <th>Продукт</th>
                                    <th>Количество</th>
                                    <th>Цена</th>
                                    <th>Сума</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userCart.map(product => {
                                    const price = product.productNewPrice !== null ? product.productNewPrice : product.productPrice;

                                    const isWeightedProduct = product.unitQuantity >= 100 &&
                                        (product.selectedSubCategory === 'Зеленчуци' ||
                                            product.selectedSubCategory === 'Плодове' ||
                                            product.selectedSubCategory === 'Маслини' ||
                                            product.selectedSubCategory === 'Месо' ||
                                            product.selectedSubCategory === 'Риба') &&
                                        product.productName !== 'БИО ЧЕРИ ДОМАТИ "Моравско село" 200г';

                                    const unitPrice = isWeightedProduct ? price * (1000 / product.unitQuantity) : price;

                                    const getProductTotalPrice = () => {
                                        if (product.count >= 100) {
                                            return (unitPrice * (productCounts[product._id] / 1000)).toFixed(2);
                                        } else if (product.count === 1 && product.productName.includes('ДИНЯ')) {
                                            return (unitPrice * (productCounts[product._id] / 1000)).toFixed(2);
                                        }
                                        return (unitPrice * productCounts[product._id]).toFixed(2);
                                    }

                                    let linkProductInfo = '';

                                    if (product.productNewPrice !== null) {
                                        linkProductInfo = '/product-info-discount';
                                    } else if (product.unitsKilogram === 'Бр') {
                                        linkProductInfo = '/product-info';
                                    } else if (product.unitsKilogram === 'Кг') {
                                        linkProductInfo = '/product-info-second';
                                    }

                                    return (
                                        <tr key={product._id}>
                                            <td>
                                                <div className={styles['myCart-table-img-content']}>
                                                    <img src={product.productImage} alt="" />
                                                    <Link to={`${linkProductInfo}/${product._id}`}>{product.productName}</Link>
                                                </div>
                                            </td>
                                            <td className={styles.quantity}>
                                                <div className={styles['count-quantity']}>
                                                    <p className={styles.minus2} onClick={() => {
                                                        const currentCount = productCounts[product._id];
                                                        let newCount;

                                                        if (currentCount > 1 && currentCount <= 5) {
                                                            newCount = currentCount - 1;
                                                            setProductCounts(prevCounts => ({
                                                                ...prevCounts,
                                                                [product._id]: newCount
                                                            }));
                                                            updateTotalPrice(product, newCount);
                                                        } else if (currentCount >= 100) {
                                                            const decrementStep = 100;
                                                            if (currentCount > decrementStep) {
                                                                newCount = currentCount - decrementStep;
                                                                //Продукти който теглото им може да е по малко от 500гр 
                                                                if ((product.productName !== 'ЧУШКИ Люти кг /Турция/' &&
                                                                    product.productName !== 'ДЖИНДЖИФИЛ корен кг /Китай/' &&
                                                                    product.selectedSubCategory !== 'Маслини') &&
                                                                    newCount < 500) {
                                                                    if (!toastShow) {
                                                                        toast.error(`Минималното количество за този продукт е 500 гр`);
                                                                        setToastShow(true);
                                                                        setTimeout(() => {
                                                                            setToastShow(false); // Ресетиране на toastShow след известно време
                                                                        }, 5000);
                                                                    }
                                                                    return;
                                                                } else if (product.productName.includes('ДИНЯ') && newCount < 3000) {
                                                                    if (!toastShow) {
                                                                        toast.error(`Минималното количество за този продукт е 3кг`);
                                                                        setToastShow(true);
                                                                        setTimeout(() => {
                                                                            setToastShow(false);
                                                                        }, 5000);
                                                                    }
                                                                    return;
                                                                }
                                                                setProductCounts(prevCounts => ({
                                                                    ...prevCounts,
                                                                    [product._id]: newCount
                                                                }));
                                                                updateTotalPrice(product, newCount);
                                                            }
                                                        }
                                                    }}>-</p>

                                                    <p className={styles.count2}>
                                                        {productCounts[product._id] >= 1000
                                                            ? `${(productCounts[product._id] / 1000).toFixed(1)} кг`
                                                            : productCounts[product._id] >= 100
                                                                ? `${productCounts[product._id]} г`
                                                                : productCounts[product._id]
                                                        }
                                                    </p>

                                                    <p className={styles.plus2} onClick={() => {
                                                        const currentCount = productCounts[product._id];
                                                        let newCount;
                                                        const isKilogram = currentCount >= 1000;
                                                        const maxKilogramCount = 10 * 1000; // 10 кг в грамове

                                                        if (currentCount >= 1 && currentCount <= 5) {
                                                            if (currentCount === 5) {
                                                                if (!toastShow) {
                                                                    toast.error(`Максималният брой единици, които могат да бъдат закупени, е достигнат`);
                                                                    setToastShow(true);
                                                                    setTimeout(() => {
                                                                        setToastShow(false); // Ресетиране на toastShow след известно време
                                                                    }, 5000);
                                                                }
                                                            } else {
                                                                newCount = currentCount + 1;
                                                                setProductCounts(prevCounts => ({
                                                                    ...prevCounts,
                                                                    [product._id]: newCount
                                                                }));
                                                                updateTotalPrice(product, newCount);
                                                            }
                                                        } else if (currentCount >= 100) {
                                                            if (currentCount < maxKilogramCount) {
                                                                newCount = currentCount + 100;
                                                                setProductCounts(prevCounts => ({
                                                                    ...prevCounts,
                                                                    [product._id]: newCount
                                                                }));
                                                                updateTotalPrice(product, newCount);
                                                            } else {
                                                                if (!toastShow) {
                                                                    toast.error(`Максималният брой килограми, които могат да бъдат закупени, е достигнат`);
                                                                    setToastShow(true);
                                                                    setTimeout(() => {
                                                                        setToastShow(false);
                                                                    }, 5000);
                                                                }
                                                            }
                                                        }
                                                    }}>+</p>
                                                </div>
                                            </td>
                                            <td>{unitPrice.toFixed(2)}лв</td>
                                            <td>
                                                {getProductTotalPrice()}лв
                                                <span>
                                                    <button onClick={() => removeProductFromCart(product._id)}>
                                                        <i className={`${styles.iconX2} fa-solid fa-xmark`}></i>
                                                    </button>
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    )}
                    <div className={styles['myCart-total-sum']}>
                        <p>Междинна сума: <span>{totalPrice.toFixed(2)}лв</span></p>
                        <p>ОБЩО: <span>{totalPrice.toFixed(2)}лв</span></p>
                    </div>
                </div>
                <div className={styles['delivery-all-price']}>
                    <p>Поръчка</p>
                    <p><span>{count}</span> {count === 1 ? 'продукт' : 'продукта'}, общо: <span>{totalPrice.toFixed(2)}лв</span></p>
                    <p>Цена за доставка: <span>*</span></p>
                    <p>ОБЩО: <span>{totalPrice.toFixed(2)}лв</span></p>
                    <Link onClick={handleOrderClick} to={'/my-cart-order'}><i className="fa-solid fa-cart-shopping"></i>ПОРЪЧАЙ</Link>
                    <p>*Цената на доставката се калкулира на следващата стъпка, след като бъде избран начин на доставка
                        и адрес за доставка.
                    </p>
                </div>
            </div>
        </div>
    )
}