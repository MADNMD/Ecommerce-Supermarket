import React, { useContext, useEffect, useState } from "react";
import styles from './FavoriteItem.module.css';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import * as profileService from '../../../../services/profileService';
import { useAuthContext } from "../../../../contexts/authContext";
import { ProfileContext } from "../../../../contexts/profileContext";
import { CartContext } from "../../../../contexts/cartContext";

export const FavoriteItem = ({
    product,
    onRemoveFavorite
}) => {

    const { handleEditProfile } = useContext(ProfileContext);
    const { userId } = useAuthContext();
    const { addCart } = useContext(CartContext);
    const [count, setCount] = useState(1);
    const [weight, setWeight] = useState(product.unitQuantity);
    const [toastShow, setToastShow] = useState(false);
    const [favoriteAnimation, setFavoriteAnimation] = useState(false);

    useEffect(() => {
        if (product.unitQuantity === 3190) {
            setWeight('3x190');
        } else if (product.unitQuantity === 4125) {
            setWeight('4x125');
        } else {
            setWeight(product.unitQuantity);
        }
    }, [product.unitQuantity]);

    let productInfoLink = '';

    const removeFromFavoriteList = async () => {

        try {
            const user = await profileService.getUser(userId);
            const updatedFavorites = user.favorites.filter(p => p._id !== product._id);
            await handleEditProfile({ ...user, favorites: updatedFavorites });
            onRemoveFavorite(product._id);
        } catch (error) {
            console.log('грешка в компонента с любими');
        }
    }

    const handleAddToCart = async () => {

        try {
            const user = await profileService.getUser(userId);
            
            addCart(product, count);

            if (user.cart.find(p => p._id === product._id)) {
                toast.error('Този продукт вече е добавен в кошницата за пазаруване!');
                return;
            }

            handleEditProfile({ ...user, cart: [...user.cart, product._id] });
            setFavoriteAnimation(true);

            setTimeout(() => {
                setFavoriteAnimation(false);
            }, 500);

        } catch (error) {
            toast.error('Не успя да добавил този продукт в кошницата за пазаруване!');
            console.log(error);
        }
    }

    const calculatePrice = () => {
        return product.productPrice * count;
    }

    const calculateNewPrice = () => {
        return product.productNewPrice * count;
    }

    if (product.productQuantity === 0) {
        productInfoLink = '/product-info-exhausted';
    } else if (product.productNewPrice !== null) {
        productInfoLink = '/product-info-discount';
    } else if (product.unitsKilogram === 'Бр') {
        productInfoLink = '/product-info';
    } else if (product.unitsKilogram === 'Кг') {
        productInfoLink = '/product-info-second';
    }

    return (
        <div className={`${styles['four-card']} ${favoriteAnimation ? styles['favorite-animation'] : ''}`}>
            <button onClick={removeFromFavoriteList}><i className={`${styles.iconX} fa-solid fa-xmark`}></i></button>
            {/* <Link to="anal"><i className={`${styles.iconX} fa-solid fa-xmark`}></i></Link> */}
            <div className={styles['card-img']}>
                {product.productNewPrice !== null ? (
                    <p className={styles['discount-percent']}>{Math.floor((product.productPrice - product.productNewPrice) / product.productNewPrice * 100)}%</p>
                ) : (
                    null
                )}
                {product.productName.includes('БИО') ? (
                    <p className={styles['bio-img']}><img src="https://optima.bg/assets/src/img/product-visual-info/optima/bio-food.svg" alt="" /></p>
                ) : (
                    null
                )}
                <Link to={`${productInfoLink}/${product._id}`}><img src={product.productImage} alt="banana-pic" /></Link>
            </div>
            <div className={styles['card-content']}>
                <h6>{product.productName}</h6>
                {product.productNewPrice !== null ? (
                    <div className={styles['card-info-price']}>
                        <p className={styles['card-price-new']}>{calculateNewPrice().toFixed(2)}лв</p>
                        <p className={styles['card-price-old']}>{product.productPrice.toFixed(2)}лв</p>
                    </div>
                ) : (
                    <p className={styles['card-price']}>{calculatePrice().toFixed(2)}лв</p>
                )}
                {product.unitWeight === 'връзка' ? (
                    <span className={styles.weight1}>{count}{count === 1 ? product.unitWeight : 'връзки'}</span>
                ) : (
                    isNaN(weight) ? (
                        <span className={styles.weight}>{weight}{product.unitWeight}</span>
                    ) : (

                        <span className={styles.weight}>{product.unitQuantity}{product.unitWeight}</span>
                        // <span className={styles.weight}>{product.unitQuantity * count}{product.unitWeight}</span>
                    )
                )}

                <div className={styles['card-option-fav']}>
                    <div className={styles['count-option']}>
                        <p className={styles.minus} onClick={() => {
                            if (count > 1) {
                                setCount(count - 1)
                            }
                        }}>-</p>
                        <p className={styles.count}>{count}</p>
                        <p className={styles.plus} onClick={() => {
                            if (count === 5) {
                                if (!toastShow) {
                                    toast.error(`Максималният брой единици, които могат да бъдат добавени в количката, е достигнат`);
                                    toastShow(true);
                                    setTimeout(() => {
                                        toastShow(false);
                                    }, 5000);
                                }
                                // alert(`Максималният брой единици, които могат да бъдат добавени в количката, е достигнат`)
                            }
                            if (count === 3 && product.unitQuantity * 3 === 750) {
                                if (!toastShow) {
                                    toast.error(`Максималният брой единици, които могат да бъдат добавени в количката, е достигнат`);
                                    toastShow(true);
                                    setTimeout(() => {
                                        toastShow(false);
                                    }, 5000);
                                }
                                // alert(`Максималният брой единици, които могат да бъдат добавени в количката, е достигнат`);
                                return;
                            }
                            if (count === 4 && product.unitQuantity * 4 === 800) {
                                if (!toastShow) {
                                    toast.error(`Максималният брой единици, които могат да бъдат добавени в количката, е достигнат`);
                                    toastShow(true);
                                    setTimeout(() => {
                                        toastShow(false);
                                    }, 5000);
                                }
                                // alert(`Максималният брой единици, които могат да бъдат добавени в количката, е достигнат`);
                                return;
                            }
                            if (count < 5) {
                                setCount(count + 1)
                            }
                        }}>+</p>
                    </div>
                    <div className={styles['order-product']}>
                    <button onClick={handleAddToCart}><i className="fa-solid fa-cart-shopping"></i>ДОБАВИ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}