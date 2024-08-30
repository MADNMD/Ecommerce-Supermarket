import React, { useContext, useEffect, useState } from "react";
import styles from './ProductInfoSecond.module.css';
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import * as productService from '../../../services/productService';
import * as profileService from '../../../services/profileService';
import { CartContext } from "../../../contexts/cartContext";
import { useAuthContext } from "../../../contexts/authContext";
import { ProfileContext } from "../../../contexts/profileContext";

export const ProductInfoSecond = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    const { addCart } = useContext(CartContext);
    const { userId } = useAuthContext();
    const { handleEditProfile } = useContext(ProfileContext);

    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const [weight, setWeight] = useState(500);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        productService.productDetails(productId)
            .then(product => {
                setPrice(product.productPrice);
                setProductDetails(product);
            })
            .catch(error => {
                console.log(error);
            })
    }, [productId]);

    const handleWeightChange = (event) => {
        const selectedWeight = Number(event.target.value);
        let newPrice = 0;
        setWeight(selectedWeight);

        if (selectedWeight === 500) {
            newPrice = productDetails.productPrice;
            setPrice(newPrice);
        } else if (selectedWeight === 1000) {
            newPrice = productDetails.productPrice * 2;
            setPrice(newPrice);
        } else if (selectedWeight === 1500) {
            newPrice = productDetails.productPrice * 3;
            setPrice(newPrice);
        } else if (selectedWeight === 100) {
            newPrice = productDetails.productPrice;
            setPrice(newPrice);
        } else if (selectedWeight === 150) {
            newPrice = productDetails.productPrice * 1.5;
            setPrice(newPrice);
        } else if (selectedWeight === 200) {
            newPrice = productDetails.productPrice * 2;
            setPrice(newPrice);
        } else if (selectedWeight === 201) {
            newPrice = productDetails.productPrice;
            setPrice(newPrice);
        } else if (selectedWeight === 400) {
            newPrice = productDetails.productPrice * 2;
            setPrice(newPrice);
        } else if (selectedWeight === 600) {
            newPrice = productDetails.productPrice * 3;
            setPrice(newPrice);
        } else if (selectedWeight === 3000) {
            newPrice = productDetails.productPrice;
            setPrice(newPrice);
        } else if (selectedWeight === 6000) {
            newPrice = productDetails.productPrice * 2;
            setPrice(newPrice);
        } else if (selectedWeight === 9000) {
            newPrice = productDetails.productPrice * 3;
            setPrice(newPrice);
        }
    }

    let link = '';
    let linkSubCategory = '';

    if (productDetails.category === 'Зеленчуци и плодове') {
        link = '/fruits-and-vegs';
    } else if (productDetails.category === 'Млечни и яйца') {
        link = '/milks-and-eggs';
    }

    if (productDetails.selectedSubCategory === 'Плодове') {
        linkSubCategory = '/fruits';
    } else if (productDetails.selectedSubCategory === 'Зеленчуци') {
        linkSubCategory = '/vegitables';
    } else if (productDetails.selectedSubCategory === 'Свежи салати') {
        linkSubCategory = '/salads';
    } else if (productDetails.selectedSubCategory === 'Свежи подправки') {
        linkSubCategory = '/spices';
    } else if (productDetails.selectedSubCategory === 'Маслини') {
        linkSubCategory = '/olives';
    } else if (productDetails.selectedSubCategory === 'Сушени плодове и зеленчуци') {
        linkSubCategory = '/dried';
    } else if (productDetails.selectedSubCategory === 'Ядки и семена') {
        linkSubCategory = '/nuts';
    } else if (productDetails.selectedSubCategory === 'Пресни млека') {
        linkSubCategory = '/milks';
    } else if (productDetails.selectedSubCategory === 'Кисели млека') {
        linkSubCategory = '/yogurts';
    } else if (productDetails.selectedSubCategory === 'Плодови млека, млечни напитки и десерти') {
        linkSubCategory = '/milkDrinks';
    } else if (productDetails.selectedSubCategory === 'Сирена') {
        linkSubCategory = '/cheeses';
    } else if (productDetails.selectedSubCategory === 'Кашкавали') {
        linkSubCategory = '/yellowCheeses';
    } else if (productDetails.selectedSubCategory === 'Масло, сметана и извара') {
        linkSubCategory = '/butters';
    } else if (productDetails.selectedSubCategory === 'Готови салати') {
        linkSubCategory = '/packedSalads';
    } else if (productDetails.selectedSubCategory === 'Яйца') {
        linkSubCategory = '/eggs';
    }

    const handleAddToCart = async () => {

        try {
            const user = await profileService.getUser(userId);

            addCart(productDetails, weight);

            if (user.cart.find(p => p._id === productDetails._id)) {
                toast.error('Този продукт вече е добавен в кошницата за пазаруване!');
                return;
            }

            handleEditProfile({ ...user, cart: [...user.cart, productDetails._id] });

        } catch (error) {
            toast.error('Не успя да добавил този продукт в кошницата за пазаруване!');
            console.log(error);
        }
    }

    return (

        <div className={styles['productFavInfo']}>
            <div className={styles.container}>

                <div className={styles['info-content1']}>
                    <div className={styles['productFavInfo-img-content']}>
                        <div className={styles['productFavInfo-img']}>
                            <img src={productDetails.productImage} alt="" />
                        </div>
                        <div className={styles['productFavInfo-content-info']}>
                            <p>* Снимката е илюстративна</p>
                            <p>** Таксуването на меримите стоки се извършва по реално доставеното количество</p>
                        </div>
                    </div>
                    <div className={styles['productFavInfo-content']}>
                        <h4>{productDetails.productName}</h4>
                        <p className={styles.brand}>Марка: <span>{productDetails.model}</span></p>
                        <div className={styles['productFavInfo-price']}>
                            <p>Цена:</p>
                            <p>{price.toFixed(2)}лв</p>
                        </div>
                        <div className={styles['count-option-favInfo']}>
                            <div className={styles['count-option2']}>
                                <select name="weight-option" value={weight} onChange={handleWeightChange}>
                                    {productDetails.unitQuantity < 500 && productDetails.unitQuantity > 10 ? (
                                        <>
                                            {productDetails.unitQuantity === 201 ? (
                                                <>
                                                    <option value="201">200г</option>
                                                    <option value="400">400г</option>
                                                    <option value="600">600г</option>
                                                </>
                                            ) : (
                                                <>
                                                    <option value="100">100г</option>
                                                    <option value="200">200г</option>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {/* Ако махнем динята махам коментара и трия проверката надолу */}
                                            {/* <option value="500">500г</option>
                                <option value="1000">1кг</option> */}
                                            {productDetails.unitQuantity >= 500 && productDetails.unitQuantity <= 1000 ? (
                                                <>
                                                    <option value="500">500г</option>
                                                    <option value="1000">1кг</option>
                                                    {/* <option value="1500">1.5кг</option> */}
                                                </>
                                            ) : (
                                                <>
                                                    <option value="3000">3кг</option>
                                                    <option value="6000">6кг</option>
                                                    <option value="9000">9кг</option>
                                                </>
                                            )}
                                        </>
                                    )}
                                </select>
                            </div>

                            <div className={styles['order-product-favInfo']}>
                                <button onClick={handleAddToCart} className={styles.addBtn}><i className="fa-solid fa-cart-shopping"></i>ДОБАВИ</button>
                            </div>
                        </div>

                        <h6>ХАРАКТЕРИСТИКИ</h6>
                        <p className={styles['productInfo-category']}>Категория: <Link to={link}>{productDetails.category}</Link></p>
                        <p className={styles['productInfo-category']}>Подкатегория: <Link to={linkSubCategory}> {productDetails.selectedSubCategory}</Link></p>
                        <h6>ОПИСАНИЕ</h6>
                        <p className={styles['productInfo-description']}>{productDetails.description}</p>
                    </div>
                </div>

                <div className={styles['info-content2']}>
                    <p><i className="fa-regular fa-money-bill-1"></i><Link to="/price-politic">Без увеличение на цените в онлайн магазина - виж тук.</Link></p>
                    <p><i className="fa-solid fa-circle-info"></i>Провери цените за доставка <Link to="/delivery">тук</Link></p>
                    <p><i className="fa-solid fa-circle-question"></i>Провери дните и часовете за доставка <Link to="/delivery">тук</Link></p>
                </div>

            </div>
        </div>
    )
}