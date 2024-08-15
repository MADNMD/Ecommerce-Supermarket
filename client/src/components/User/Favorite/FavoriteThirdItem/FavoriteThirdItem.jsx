import React, { useContext } from "react";
import styles from './FavoriteThirdItem.module.css';
import { Link } from "react-router-dom";

import * as profileService from '../../../../services/profileService';
import { useAuthContext } from "../../../../contexts/authContext";
import { ProfileContext } from "../../../../contexts/profileContext";

export const FavoriteThirdItem = ({
    product,
    onRemoveFavorite
}) => {

    const { handleEditProfile } = useContext(ProfileContext);
    const { userId } = useAuthContext();

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
                {product.productName.includes('БИО') ? (
                    <p className={styles['bio-img']}><img src="https://optima.bg/assets/src/img/product-visual-info/optima/bio-food.svg" alt="" /></p>
                ) : (
                    null
                )}
                <Link to={`${productInfoLink}/${product._id}`}><img src={product.productImage} alt="banana-pic" /></Link>
            </div>
            <div className={styles['card-content']}>
                <h6>{product.productName}</h6>
                <p className={styles['card-price']}>{product.productPrice.toFixed(2)}лв</p>
                {product.unitWeight === 'връзка' ? (
                    <span className={styles.weight2}>{product.unitQuantity}{product.unitWeight}</span>
                ) : (
                    <span className={styles.weight}>{product.unitQuantity}{product.unitWeight}</span>
                )}

                <div className={styles['card-option-fav']}>

                    <div className={styles['order-product']}>
                        <p>ИЗЧЕРПАН ПРОДУКТ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}