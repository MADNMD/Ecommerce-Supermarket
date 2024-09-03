import React, { useEffect, useState } from "react";
import styles from '../Recipies.module.css';
import { FaHeart, FaClock } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";

import soupsRecipies from './recipies.json';

export const Soups = ({ showNavigationAndFooter }) => {

    const [liked, setLiked] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        showNavigationAndFooter();
        const savedLikes = JSON.parse(localStorage.getItem("likedRecipes"));
        if (savedLikes) {
            setLiked(savedLikes);
        }
    }, [showNavigationAndFooter]);

    const toggleLike = (id) => {
        setLiked(prevLikedStates => {
            const newLikedStates = {
                ...prevLikedStates,
                [id]: !prevLikedStates[id]
            };
            localStorage.setItem("likedRecipes", JSON.stringify(newLikedStates));
            return newLikedStates;
        });
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = soupsRecipies.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(soupsRecipies.length / itemsPerPage)) {
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
        const totalPages = Math.ceil(soupsRecipies.length / itemsPerPage);
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

    return (
        <div className={styles['recipies-container']}>
            <h2>Рецепти за вкусни супи</h2>
            <div className={styles['recipes-cards']}>

                {currentItems.map(card => (
                    <div key={card.id} className={styles['recipes-card']}>
                        <Link>
                            <div className={styles['recipies-img']}>
                                <img src={card.image} alt="chicken-soup" />
                            </div>

                            <h6>{card.title}</h6>
                        </Link>

                        <div className={styles['recipies-content']}>
                            <div className={styles.icons}>
                                <div className={styles.clock}>
                                    <FaClock style={{ color: "rgba(0, 31, 61, 1)" }} />
                                    <p className={styles.clock}>{card.cookTime}</p>
                                </div>
                            </div>

                            <div className={styles.likes} style={{ color: liked[card.id] ? "red" : "rgba(0, 31, 61, 1)" }} onClick={() => toggleLike(card.id)}>
                                {liked[card.id] ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart style={{ color: "rgba(0, 31, 61, 1)" }} />}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className={styles.pagination}>
                <button className={styles.prev} onClick={prevPage} disabled={currentPage === 1}><GoChevronLeft /></button>
                {renderPageNumbers()}
                <button className={styles.next} onClick={nextPage} disabled={currentPage === Math.ceil(soupsRecipies.length / itemsPerPage)}><GoChevronRight /></button>
            </div>
        </div>
    )
}