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

    const categoryLinks = {
        'Зеленчуци и плодове': '/fruits-and-vegs',
        'Млечни и яйца': '/milks-and-eggs',
        'Месо и риба': '/meat-and-fish',
        'Хляб и тестени': '/bread-and-pasta',
        'Сладки и солени': '/sweet-and-salty',
        'Напитки и вода': '/drink-water',
        'Бебешки и детски': '/baby-and-children-products',
        'За дома и бита': '/for-home-and-garden-products',
        'Куче и котка': '/dog-and-cat-products',
    };

    const subCategoryLinks = {
        'Плодове': '/fruits',
        'Зеленчуци': '/vegitables',
        'Свежи салати': '/salads',
        'Свежи подправки': '/spices',
        'Маслини': '/olives',
        'Сушени плодове и зеленчуци': '/dried',
        'Ядки и семена': '/nuts',
        'Пресни млека': '/milks',
        'Кисели млека': '/yogurts',
        'Плодови млека, млечни напитки и десерти': '/milkDrinks',
        'Сирена': '/cheeses',
        'Кашкавали': '/yellowCheeses',
        'Масло, сметана и извара': '/butters',
        'Готови салати': '/packedSalads',
        'Яйца': '/eggs',
        'Месо': '/meat',
        'Месни продукти': '/meat-products',
        'Риба': '/fish',
        'Суши и рибни продукти': '/sushi-and-fish-products',
        'Хляб': '/bread',
        'Макаронени изделия': '/pasta-product',
        'Тестени изделия': '/dough-product',
        'Прясна паста': '/fresh-pasta',
        'Багети и тортили': '/baguettes-and-trotillas',
        'Захарни изделия': '/sugar-products',
        'Зърнени Закуски, корнфлейкс и мюсли': '/breakfast-cereals-cornflakes-and-muesli',
        'Солени изделия': '/salty-products',
        'Чипсове и снаксове': '/chips-and-snacks',
        'Кафе, чай и какао': '/coffee-and-tea',
        'Вода': '/water',
        'Фрешове, смутита, плодови и зеленчукови напитки': '/fresh-and-smoothies',
        'Безалкохолни напитки': '/soft-drink',
        'Енергийни напитки, витаминозни и изотонични напитки': '/energy-drink',
        'Сайдер и комбуча': '/cider-and-kombucha',
        'Бира': '/beer',
        'Вино': '/wine',
        'Високоалкохолни напитки': '/alcohol-drink',
        'Храни': '/baby-foods',
        'Напитки': '/baby-drinks',
        'Козметика': '/baby-cosmetics',
        'Пелени и мокри кърпички': '/diapers-and-wet-wipes',
        'Перилни препарати и омекотители': '/detergents-and-fabric-softeners',
        'Перилни препарати': '/laundry-detergents',
        'Почистващи препарати': '/cleaning-preparations',
        'Хартии, салфетки, фолиа, пликов': '/papers-napkins-foils-envelopes',
        'Средства за почистване': '/cleaning-products',
        'Ароматизатори и свещи': '/air-fresheners-candles-insecticides',
        'За бита и градината': '/for-home-and-garden',
        'Храна за куче': '/dog-food',
        'Храна за коте': '/cat-food',
        'Лакомства': '/treats',
        'Аксесоари': '/accessories',
    };

    const link = categoryLinks[productDetails.category] || '';
    const linkSubCategory = subCategoryLinks[productDetails.selectedSubCategory] || '';

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