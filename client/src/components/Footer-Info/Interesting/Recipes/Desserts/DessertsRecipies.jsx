import React, { useEffect, useState } from "react";
import styles from '../Recipies.module.css';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import dessertsRecipies from './recipies.json'
import { RecipieCards } from '../RecipieCards';

export const DessertsRecipies = ({ showNavigationAndFooter }) => {

    const [liked, setLiked] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        showNavigationAndFooter();
        const savedLikes = JSON.parse(localStorage.getItem("likedDessertsRecipes"));
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
            localStorage.setItem("likedDessertsRecipes", JSON.stringify(newLikedStates));
            return newLikedStates;
        });
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dessertsRecipies.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(dessertsRecipies.length / itemsPerPage)) {
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
        const totalPages = Math.ceil(dessertsRecipies.length / itemsPerPage);
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
            <h2>Рецепти за вкусни салати</h2>
            <div className={styles['recipes-cards']}>

                {currentItems.map(card => (
                    <RecipieCards
                        key={card.id}
                        id={card.id}
                        image={card.image}
                        title={card.title}
                        cookTime={card.cookTime}
                        category={card.category}
                        liked={liked[card.id]}
                        toggleLike={() => toggleLike(card.id)}
                    />
                ))}

            </div>
            <div className={styles.pagination}>
                <button className={styles.prev} onClick={prevPage} disabled={currentPage === 1}><GoChevronLeft /></button>
                {renderPageNumbers()}
                <button className={styles.next} onClick={nextPage} disabled={currentPage === Math.ceil(dessertsRecipies.length / itemsPerPage)}><GoChevronRight /></button>
            </div>
        </div>
    )
}