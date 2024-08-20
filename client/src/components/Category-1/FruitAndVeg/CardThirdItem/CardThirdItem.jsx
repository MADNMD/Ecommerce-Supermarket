import React, { useState } from "react";
import styles from './CardThirdItem.module.css';
import { Link } from "react-router-dom";

export const CardThirdItem = ({
    product
}) => {

    // const [grams, setGrams] = useState(product.unitQuantity);

    // if (product.unitQuantity === 201) {
    //     setGrams(200);
    // }

    return (
        <div className={styles['third-card']}>

            <div className={styles['card-img']}>
                {product.productName.includes('БИО') ? (
                    <p className={styles['bio-img']}><img src="https://optima.bg/assets/src/img/product-visual-info/optima/bio-food.svg" alt="" /></p>
                ) : (
                    null
                )}
                <Link to={`/product-info-exhausted/${product._id}`}><img src={product.productImage} alt="banana-pic" /></Link>
            </div>

            <div className={styles['card-content']}>
                <h6>{product.productName}</h6>
                <p className={styles['card-price']}>{product.productPrice.toFixed(2)}лв</p>
                <span className={styles.weight}>{product.unitQuantity === 201 ? product.unitQuantity - 1 : product.unitQuantity}{product.unitWeight}</span>

                <div className={styles['card-option']}>
                    <p>ИЗЧЕРПАН ПРОДУКТ</p>
                </div>

            </div>

        </div>
    )
}