import React, { useContext, useEffect, useState } from "react";
import styles from './FavoriteItem.module.css';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import * as profileService from '../../../../services/profileService';
import { useAuthContext } from "../../../../contexts/authContext";
import { ProfileContext } from "../../../../contexts/profileContext";

export const FavoriteItem = ({
    product,
    onRemoveFavorite
}) => {

    const { handleEditProfile } = useContext(ProfileContext);
    const { userId } = useAuthContext();
    const [count, setCount] = useState(1);
    const [weight, setWeight] = useState(product.unitQuantity);
    const [toastShow, setToastShow] = useState(false);

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
        <div className={styles['four-card']}>
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
                        <Link to=""><i className="fa-solid fa-cart-shopping"></i>ДОБАВИ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}