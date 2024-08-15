import React, { useContext, useEffect, useState } from "react";
import styles from './FavoriteSecondItem.module.css';
import { Link } from "react-router-dom";

import * as profileService from '../../../../services/profileService';
import { useAuthContext } from "../../../../contexts/authContext";
import { ProfileContext } from "../../../../contexts/profileContext";

export const FavoriteSecondItem = ({
    product,
    onRemoveFavorite
}) => {

    const { handleEditProfile } = useContext(ProfileContext);
    const { userId } = useAuthContext();
    const [weight, setWeight] = useState(product.unitQuantity);
    const [grams, setGrams] = useState(weight);
    const [kilograms, setKilograms] = useState(weight)
    const [price, setPrice] = useState(product.productNewPrice);

    let productInfoLink = '';

    if (grams === 201) {
        setGrams(200);
    }

    const handleWeightChange = (event) => {
        const selectedWeight = Number(event.target.value);
        let newPrice = 0;
        setWeight(selectedWeight);

        if (selectedWeight === 500) {
            newPrice = product.productPrice;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 1000) {
            newPrice = product.productPrice * 2;
            setPrice(newPrice);
            setKilograms(selectedWeight / 1000);
            setGrams(0);
        } else if (selectedWeight === 1500) {
            newPrice = product.productPrice * 3;
            setPrice(newPrice);
            setKilograms(selectedWeight / 1000);
            setGrams(0);
        } else if (selectedWeight === 100) {
            newPrice = product.productPrice;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 150) {
            newPrice = product.productPrice * 1.5;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 200) {
            newPrice = product.productPrice * 2;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 201) {
            newPrice = product.productPrice;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 400) {
            newPrice = product.productPrice * 2;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 600) {
            newPrice = product.productPrice * 3;
            setPrice(newPrice);
            setGrams(selectedWeight);
            setKilograms(0);
        } else if (selectedWeight === 3000) {
            newPrice = product.productPrice;
            setPrice(newPrice);
            setKilograms(selectedWeight / 1000);
            // setGrams(0);
        } else if (selectedWeight === 6000) {
            newPrice = product.productPrice * 2;
            setPrice(newPrice);
            setKilograms(selectedWeight / 1000);
            // setGrams(0);
        } else if (selectedWeight === 9000) {
            newPrice = product.productPrice * 3;
            setPrice(newPrice);
            setKilograms(selectedWeight / 1000);
            // setGrams(0);
        }
    }

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
                        <p className={styles['card-price-new']}>{price?.toFixed(2)}лв</p>
                        <p className={styles['card-price-old']}>{product.productPrice.toFixed(2)}лв</p>
                    </div>
                ) : (
                    <p className={styles['card-price']}>{price?.toFixed(2)}лв</p>
                )}
                <span className={styles['weight']}>{weight < 1000 ? grams : kilograms}{grams ? product.unitWeight : 'к' + product.unitWeight}</span>

                <div className={styles['card-option-fav']}>
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
                                            <option value="150">150г</option>
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
                    </div>
                    <div className={styles['order-product']}>
                        <Link to=""><i className="fa-solid fa-cart-shopping"></i>ДОБАВИ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}