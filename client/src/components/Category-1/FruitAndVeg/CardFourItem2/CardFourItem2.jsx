import React, { useContext, useState } from "react";
import styles from './CardFourItem2.module.css';
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


import * as profileService from '../../../../services/profileService';
import { ProfileContext } from "../../../../contexts/profileContext";
import { useAuthContext } from "../../../../contexts/authContext";
import { CartContext } from "../../../../contexts/cartContext";

export const CardFourItem2 = ({
    product
}) => {

    const { handleEditProfile } = useContext(ProfileContext);
    const { userId } = useAuthContext();
    const { addCart } = useContext(CartContext);

    const [weight, setWeight] = useState(product.unitQuantity);
    const [grams, setGrams] = useState(weight);
    const [kilograms, setKilograms] = useState(weight);
    const [price, setPrice] = useState(product.productNewPrice);
    const [favoriteAnimation, setFavoriteAnimation] = useState(false);

    if (grams === 201) {
        setGrams(200);
    }

    const handleWeightChange = (event) => {
        const selectedWeight = Number(event.target.value);
        let newPrice = 0;
        setWeight(selectedWeight);

        if (selectedWeight === 500) {
            newPrice = product.productNewPrice;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 1000) {
            newPrice = product.productNewPrice * 2;
            setPrice(newPrice);
            setKilograms(selectedWeight / 1000);
            setGrams(0);
        } else if (selectedWeight === 1500) {
            newPrice = product.productNewPrice * 3;
            setPrice(newPrice);
            setKilograms(selectedWeight / 1000);
            setGrams(0);
        } else if (selectedWeight === 100) {
            newPrice = product.productNewPrice;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 200) {
            newPrice = product.productNewPrice * 2;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 201) {
            newPrice = product.productNewPrice;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 400) {
            newPrice = product.productNewPrice * 2;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 600) {
            newPrice = product.productNewPrice * 3;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 3000) {
            newPrice = product.productNewPrice;
            setPrice(newPrice);
            setKilograms(selectedWeight / 1000);
            setGrams(0);
        } else if (selectedWeight === 6000) {
            newPrice = product.productNewPrice * 2;
            setPrice(newPrice);
            setKilograms(selectedWeight / 1000);
            setGrams(0);
        } else if (selectedWeight === 9000) {
            newPrice = product.productNewPrice * 3;
            setPrice(newPrice);
            setKilograms(selectedWeight / 1000);
            setGrams(0);
        }
    }

    const handleAddToFavorites = async () => {
        try {
            const user = await profileService.getUser(userId);

            if (user.favorites.find(p => p._id === product._id)) {
                toast.error('Този продукт вече е добавен в любими!');
                // alert(`Този продукт вече е добавен в любими!`);
                return;
            }

            handleEditProfile({ ...user, favorites: [...user.favorites, product._id] });

            setFavoriteAnimation(true);

            setTimeout(() => {
                setFavoriteAnimation(false);
            }, 500);

        } catch (error) {

        }
    }

    const handleAddToCart = async () => {

        try {
            const user = await profileService.getUser(userId);

            addCart(product, weight);

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

    return (
        <div className={`${styles['five-card']} ${favoriteAnimation ? styles['favorite-animation'] : ''}`}>

            <div className={styles['card-img']}>
                <p className={styles['discount-percent']}>{Math.floor((product.productPrice - product.productNewPrice) / product.productNewPrice * 100)}%</p>
                {product.productName.includes('БИО') ? (
                    <p className={styles['bio-img']}><img src="https://optima.bg/assets/src/img/product-visual-info/optima/bio-food.svg" alt="" /></p>
                ) : (
                    null
                )}
                <Link to={`/product-info-discount/${product._id}`}> <img src={product.productImage} alt="banana-pic" /></Link>
            </div>

            <div className={styles['card-content']}>
                <h6>{product.productName}</h6>
                <div className={styles['card-info-price']}>
                    <p className={styles['card-price-new']}>{price.toFixed(2)}лв</p>
                    <p className={styles['card-price-old']}>{product.productPrice.toFixed(2)}лв</p>
                </div>
                <span className={styles['weight']}>{weight < 1000 ? grams : kilograms}{grams ? product.unitWeight : 'k' + product.unitWeight}</span>

                <div className={styles['card-option']}>
                    <select name="weight-option" value={weight} onChange={handleWeightChange}>
                        {product.unitQuantity < 500 && product.unitQuantity > 10 ? (
                            <>
                                {product.unitQuantity === 201 ? (
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
                                {product.unitQuantity >= 500 && product.unitQuantity <= 1000 ? (
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