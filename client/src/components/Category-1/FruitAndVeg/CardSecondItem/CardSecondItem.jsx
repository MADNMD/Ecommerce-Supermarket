import React, { useContext, useState } from "react";
import styles from './CardSecondItem.module.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { ProfileContext } from "../../../../contexts/profileContext";
import { useAuthContext } from "../../../../contexts/authContext";
import { CartContext } from "../../../../contexts/cartContext";
import * as profileService from '../../../../services/profileService';

export const CardSecondItem = ({
    product
}) => {

    const { handleEditProfile } = useContext(ProfileContext);
    const { userId } = useAuthContext();
    const { addCart } = useContext(CartContext);

    const [count, setCount] = useState(1);
    const [favoriteAnimation, setFavoriteAnimation] = useState(false);
    const [toastShow, setToastShow] = useState(false);

    const calculatePrice = () => {
        return product.productPrice * count;
    }

    const handleAddToFavorites = async () => {

        try {
            const user = await profileService.getUser(userId);

            if (user.favorites.find(p => p._id === product._id)) {
                toast.error('Този продукт вече е добавен в любими!');
                // alert('Този продукт вече е добавен в любими!');
                return;
            }

            handleEditProfile({ ...user, favorites: [...user.favorites, product._id] });

            setFavoriteAnimation(true);

            setTimeout(() => {
                setFavoriteAnimation(false);
            }, 500);

        } catch (error) {
            console.log('грешка от компонента за любими');
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
            toast.error('Не успя да добавиш този продукт в кошницата за пазаруване!');
            console.log(error);
        }
    }

    return (
        <div className={`${styles['second-card']} ${favoriteAnimation ? styles['favorite-animation'] : ''}`}>

            <div className={styles['card-img']}>
                {product.productName.includes('БИО') ? (
                    <p className={styles['bio-img']}><img src="https://optima.bg/assets/src/img/product-visual-info/optima/bio-food.svg" alt="" /></p>
                ) : (
                    null
                )}
                <Link to={`/product-info/${product._id}`}><img src={product.productImage} alt="banana-pic" /></Link>
            </div>

            <div className={styles['card-content']}>
                <h6>{product.productName}</h6>
                <p className={styles['card-price']}>{calculatePrice().toFixed(2)}лв</p>
                <span className={styles['weight']}>{product.unitQuantity}{product.unitWeight}</span>
                {/* <span className={styles['weight']}>{product.unitQuantity * count}{product.unitWeight}</span> */}

                <div className={styles['card-option']}>
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
                                    setToastShow(true);
                                    setTimeout(() => {
                                        setToastShow(false);
                                    }, 5000)
                                        ;
                                }
                                // alert(`Максималният брой единици, които могат да бъдат добавени в количката, е достигнат`)
                            }
                            if (count === 3 && product.unitQuantity * 3 === 750) {
                                if (!toastShow) {
                                    toast.error(`Максималният брой единици, които могат да бъдат добавени в количката, е достигнат`);
                                    setToastShow(true);
                                    setTimeout(() => {
                                        setToastShow(false);
                                    }, 5000)
                                        ;
                                }
                                // alert(`Максималният брой единици, които могат да бъдат добавени в количката, е достигнат`);
                                return;
                            }
                            if (count === 4 && product.unitQuantity * 4 === 800) {
                                if (!toastShow) {
                                    toast.error(`Максималният брой единици, които могат да бъдат добавени в количката, е достигнат`);
                                    setToastShow(true);
                                    setTimeout(() => {
                                        setToastShow(false);
                                    }, 5000)
                                        ;
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
                    <div className={styles['favorite-product']}>
                        <button onClick={handleAddToFavorites}><i className="fa-regular fa-heart"></i>ЛЮБИМИ</button>
                    </div>
                </div>

            </div>

        </div>
    )
}