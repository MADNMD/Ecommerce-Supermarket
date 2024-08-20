import React from "react";
import styles from './CardThirdItem2.module.css';
import { Link } from "react-router-dom";

export const CardThirdItem2 = ({
    product
}) => {
    return (
        <div className={styles['third-card2']}>

            <div className={styles['card-img2']}>
                {product.productName.includes('БИО') ? (
                    <p className={styles['bio-img']}><img src="https://optima.bg/assets/src/img/product-visual-info/optima/bio-food.svg" alt="" /></p>
                ) : (
                    null
                )}
                <Link to={`/product-info-exhausted/${product._id}`}><img src={product.productImage} alt="banana-pic" /></Link>
            </div>

            <div className={styles['card-content2']}>
                <h6>{product.productName}</h6>
                <p className={styles['card-price2']}>{product.productPrice.toFixed(2)}лв</p>
                <span className={styles.weight2}>{product.unitQuantity}{product.unitWeight}</span>

                <div className={styles['card-option2']}>
                    <p>ИЗЧЕРПАН ПРОДУКТ</p>
                </div>

            </div>

        </div>
    )
}