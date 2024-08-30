import React, { useEffect, useState } from "react";
import styles from './ProductInfoExhausted.module.css';
import { Link, useParams } from 'react-router-dom';

import * as productService from '../../../services/productService';

export const ProductInfoExhausted = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    const { productId } = useParams();
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        productService.productDetails(productId)
            .then(product => {
                setProductDetails(product);
            })
            .catch(error => {
                console.log(error);
            })
    }, [productId]);

    let link = '';
    let linkSubCategory = '';

    if (productDetails.category === 'Зеленчуци и плодове') {
        link = '/fruits-and-vegs'
    }else if(productDetails.category === 'Млечни и яйца') {
        link = '/milks-and-eggs';
    }

    if(productDetails.selectedSubCategory === 'Плодове') {
        linkSubCategory = '/fruits';
    }else if(productDetails.selectedSubCategory === 'Зеленчуци') {
        linkSubCategory = '/vegitables';
    }else if(productDetails.selectedSubCategory === 'Свежи салати') {
        linkSubCategory = '/salads';
    }else if(productDetails.selectedSubCategory === 'Свежи подправки') {
        linkSubCategory = '/spices';
    }else if(productDetails.selectedSubCategory === 'Маслини') {
        linkSubCategory = '/olives';
    }else if(productDetails.selectedSubCategory === 'Сушени плодове и зеленчуци') {
        linkSubCategory = '/dried';
    }else if(productDetails.selectedSubCategory === 'Ядки и семена') {
        linkSubCategory = '/nuts';
    }else if(productDetails.selectedSubCategory === 'Пресни млека') {
        linkSubCategory = '/milks';
    }else if(productDetails.selectedSubCategory === 'Кисели млека') {
        linkSubCategory = '/yogurts';
    }else if(productDetails.selectedSubCategory === 'Плодови млека, млечни напитки и десерти') {
        linkSubCategory = '/milkDrinks';
    }else if(productDetails.selectedSubCategory === 'Сирена') {
        linkSubCategory = '/cheeses';
    }else if(productDetails.selectedSubCategory === 'Кашкавали') {
        linkSubCategory = '/yellowCheeses';
    }else if(productDetails.selectedSubCategory === 'Масло, сметана и извара') {
        linkSubCategory = '/butters';
    }else if(productDetails.selectedSubCategory === 'Готови салати') {
        linkSubCategory = '/packedSalads';
    }else if(productDetails.selectedSubCategory === 'Яйца') {
        linkSubCategory = '/eggs';
    }

    return (

        <div className={styles['productFavInfoExhausted']}>
            <div className={styles.container}>

                <div className={styles['info-content1']}>
                    <div className={styles['productFavInfoExhausted-img-content']}>
                        <div className={styles['productFavInfoExhausted-img']}>
                            <img src={productDetails.productImage} alt="" />
                        </div>
                        <div className={styles['productFavInfoExhausted-content-info']}>
                            <p>* Снимката е илюстративна</p>
                            <p>** Таксуването на меримите стоки се извършва по реално доставеното количество</p>
                        </div>
                    </div>
                    <div className={styles['productFavInfoExhausted-content']}>
                        <h4>{productDetails.productName}</h4>
                        <p className={styles.brand}>Марка: <span>{productDetails.model}</span></p>
                        <div className={styles['productFavInfoExhausted-price']}>
                            <p>Цена:</p>
                            <p>{productDetails.productPrice}лв</p>
                        </div>
                        <div className={styles['count-option-favInfo']}>
                            <p>ИЗЧЕРПАН</p>
                        </div>

                        <h6>ХАРАКТЕРИСТИКИ</h6>
                        <p className={styles['productFavInfoExhausted-category']}>Категория: <Link to={link}>{productDetails.category}</Link></p>
                        <p className={styles['productFavInfoExhausted-category']}>Подкатегория: <Link to={linkSubCategory}> {productDetails.selectedSubCategory}</Link></p>
                        <h6>ОПИСАНИЕ</h6>
                        <p className={styles['productFavInfoExhausted-description']}>{productDetails.description}</p>
                    </div>
                </div>

                <div className={styles['info-content2']}>
                    <p><i className="fa-regular fa-money-bill-1"></i><Link to="/price-politic">Без увеличение на
                        цените в онлайн магазина - виж тук.</Link></p>
                    <p><i className="fa-solid fa-circle-info"></i>Провери цените за доставка <Link
                        to="/delivery">тук</Link></p>
                    <p><i className="fa-solid fa-circle-question"></i>Провери дните и часовете за доставка <Link
                        to="/delivery">тук</Link></p>
                </div>

            </div>
        </div>
    )

}