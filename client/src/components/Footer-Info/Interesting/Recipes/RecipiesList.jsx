import React, { useEffect, useState } from "react";
import styles from './Recipies.module.css';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { RecipieCards } from './RecipieCards';

export const RecipiesList = ({ recipies, likedStorageKey, title, showNavigationAndFooter }) => {

    const [liked, setLiked] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        showNavigationAndFooter();
        const savedLikes = localStorage.getItem(likedStorageKey);

        if (savedLikes) {
            try {
                setLiked(JSON.parse(savedLikes));
            } catch (error) {
                console.error("Error parsing JSON:", error);
                setLiked([]); 
            }
        } else {
            setLiked([]); 
        }
        // const savedLikes = JSON.parse(localStorage.getItem(likedStorageKey) || []);
        // if (savedLikes) {
        //     setLiked(savedLikes);
        // }
    }, [showNavigationAndFooter, likedStorageKey]);

    const toggleLike = (id) => {
        setLiked(prevLikedStates => {
            const newLikedStates = {
                ...prevLikedStates,
                [id]: !prevLikedStates[id]
            };
            localStorage.setItem(likedStorageKey, JSON.stringify(newLikedStates));
            return newLikedStates;
        });
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = recipies.slice(indexOfFirstItem, indexOfLastItem);

    const nextPage = () => {
        if (currentPage < Math.ceil(recipies.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const totalPages = Math.ceil(recipies.length / itemsPerPage);
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
    };

    return (
        <div className={styles['recipies-container']}>
            <h2>{title}</h2>
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
                <button className={styles.next} onClick={nextPage} disabled={currentPage === Math.ceil(recipies.length / itemsPerPage)}><GoChevronRight /></button>
            </div>
        </div>
    );
};
