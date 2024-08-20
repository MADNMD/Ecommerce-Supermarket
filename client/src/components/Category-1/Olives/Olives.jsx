import React, { useEffect, useState } from "react";
import styles from './Olives.module.css';
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import * as productService from '../../../services/fruitAndVegService';
import { CardFirstItem } from '../FruitAndVeg/CardFirstItem';
import { CardSecondItem } from "../FruitAndVeg/CardSecondItem";
import { CardThirdItem } from '../FruitAndVeg/CardThirdItem';
import { CardThirdItem2 } from "../FruitAndVeg/CardThirdItem2";
import { CardFourItem } from '../FruitAndVeg/CardFourItem';
import { CardFiveItem } from "../FruitAndVeg/CardFiveItem";
import { CardFourItem2 } from "../FruitAndVeg/CardFourItem2";

export const Olives = ({ showNavigationAndFooter }) => {

    const [allOlives, setAllOlives] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortBy, setSortBy] = useState('');
    const [color, setColor] = useState('rgba(239, 133, 53, 1)');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    useEffect(() => {
        setLoading(true);
        productService.getAllOlives()
            .then(olives => {
                setAllOlives(olives);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    }

    const sortProducts = (products) => {
        switch (sortBy) {
            case 'name':
                return products.sort((a, b) => a.productName.localeCompare(b.productName));
            case 'high-price':
                return products.sort((a, b) => b.productPrice - a.productPrice);
            case 'low-price':
                return products.sort((a, b) => a.productPrice - b.productPrice);
            case 'percent':
                return products.sort((a, b) => b.productNewPrice - a.productNewPrice);
            default:
                return products.sort((a, b) => b.productQuantity - a.productQuantity);
        }
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortProducts(allOlives).slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(allOlives.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const renderPageNumbers = () => {
        const totalPages = Math.ceil(allOlives.length / itemsPerPage);
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={i === currentPage ? styles.activePage : styles.currentPage}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    }

    const cssLoader = {
        display: "block",
        margin: "270px auto 0 auto",
    };

    return (
        <div className={styles.fruitAndVeg}>
            <div className={styles.container}>
                <div className={styles['fruitAndVeg-main-content']}>

                    <div className={styles['mini-nav-product']}>
                        <Link to="/fruits">Плодове</Link>
                        <Link to="/vegitables">Зеленчуци</Link>
                        <Link to="/salads">Свежи салати</Link>
                        <Link to="/spices">Свежи подправки</Link>
                        <Link to="/olives">Маслини</Link>
                        <Link to="/dried">Сушени плодове и зеленчуци</Link>
                        <Link to="/nuts">Ядки и семена</Link>
                    </div>

                    <div className={styles['fruitAndVeg-content']}>
                        <h3 className={styles['sometimes']}>Маслини</h3>
                        <div className={styles['option-btn']}>
                            <label htmlFor="">Подреди по:</label>
                            <select name="option" value={sortBy} onChange={handleSortChange}>
                                <option value="name">Име</option>
                                <option value="high-price">Най-висока цена</option>
                                <option value="low-price">Най-ниска цена</option>
                                <option value="percent">% намаление</option>
                            </select>
                        </div>
                        <div className={styles.cards}>

                            {loading ? (
                                <PacmanLoader
                                    color={color}
                                    cssOverride={cssLoader}
                                    size={70}
                                />
                            ) : (
                                currentItems.map(product => {
                                    let cardComponent;
                                    switch (true) {
                                        case product.productQuantity === 0:
                                            if (product.unitWeight === 'връзка') {
                                                cardComponent = <CardThirdItem2 product={product} />;
                                            } else {
                                                cardComponent = <CardThirdItem product={product} />;
                                            }
                                            break;
                                        case product.productNewPrice !== null:
                                            if (product.unitsKilogram === 'Кг') {
                                                cardComponent = <CardFourItem2 product={product} />
                                            } else {
                                                cardComponent = <CardFourItem product={product} />;
                                            }
                                            break;
                                        case product.unitWeight === 'връзка':
                                            cardComponent = <CardFiveItem product={product} />
                                            break;
                                        case product.unitsKilogram === 'Кг':
                                            cardComponent = <CardFirstItem product={product} />;
                                            break;
                                        case product.unitsKilogram === 'Бр':
                                            cardComponent = <CardSecondItem product={product} />;
                                            break;
                                    }
                                    return (
                                        <React.Fragment key={product._id}>{cardComponent}</React.Fragment>
                                    );
                                })
                            )}
                        </div>
                        <div className={styles.pagination}>
                            <button className={styles.prev} onClick={prevPage} disabled={currentPage === 1}><GoChevronLeft /></button>
                            {renderPageNumbers()}
                            <button className={styles.next} onClick={nextPage} disabled={currentPage === Math.ceil(allOlives.length / itemsPerPage)}><GoChevronRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}