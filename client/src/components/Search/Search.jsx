import React, { useEffect, useState } from 'react';
import styles from './Search.module.css'
import { useLocation } from 'react-router-dom';
import PacmanLoader from "react-spinners/PacmanLoader";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import * as productService from '../../services/productService';
import { CardFirstItem } from "./CardFirstItem";
import { CardSecondItem } from "./CardSecondItem";
import { CardThirdItem } from './CardThirdItem';

export const Search = ({ showNavigationAndFooter }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState('rgba(239, 133, 53, 1)');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;

    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');

    useEffect(() => {
        showNavigationAndFooter()
    }, [showNavigationAndFooter]);

    useEffect(() => {

        setLoading(true);
        if (query) {
            productService.searchProduct(query)
                .then(getSearchProducts => {
                    setProducts(getSearchProducts);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }, [query]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(products.length / itemsPerPage)) {
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
        const totalPages = Math.ceil(products.length / itemsPerPage);
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
        <>
            {loading ? (
                <div className={styles.loaderContainer}>
                    <PacmanLoader
                        color={color}
                        cssOverride={cssLoader}
                        size={70}
                    />
                </div>
            ) : (
                <>
                    <div className={styles.searchContainer}>
                        <div className={styles.searchHeader}>
                            <h4>Резултати от търсене на "{query}"</h4>
                        </div>
                        <div className={styles.productsContainer}>
                            {products.length > 0 ? (
                                currentItems.map(product => {
                                    let cardComponent;
                                    {
                                        product.productQuantity === 0 ? (
                                            cardComponent = <CardSecondItem product={product} />
                                        ) : product.unitsKilogram === 'Бр' ? (
                                            cardComponent = <CardFirstItem product={product} />
                                        ) : (
                                            cardComponent = <CardThirdItem product={product} />
                                        )
                                    }
                                    return <React.Fragment key={product._id}>{cardComponent}</React.Fragment>
                                })
                            ) : (
                                <div>Няма намерени продукти</div>
                            )}
                        </div>
                    </div>
                    {products.length > 0 && (
                        <div className={styles.pagination}>
                            <button className={styles.prev} onClick={prevPage} disabled={currentPage === 1}><GoChevronLeft /></button>
                            {renderPageNumbers()}
                            <button className={styles.next} onClick={nextPage} disabled={currentPage === Math.ceil(products.length / itemsPerPage)}><GoChevronRight /></button>
                        </div>
                    )}
                </>
            )}
        </>
    )
}
