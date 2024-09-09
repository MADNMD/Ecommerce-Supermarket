import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaHeart, FaRegHeart } from 'react-icons/fa';
import styles from './RecipieCards.module.css';

export const RecipieCards = ({ id, image, title, cookTime, category, liked, toggleLike }) => {
    return (
        <div className={styles['recipes-card']}>
            <Link to={`/interesting/${category}/${id}`}>
                <div className={styles['recipies-img']}>
                    <img src={image} alt={title} />
                </div>

                <h6>{title}</h6>
            </Link>

            <div className={styles['recipies-content']}>
                <div className={styles.icons}>
                    <div className={styles.clock}>
                        <FaClock style={{ color: "rgba(0, 31, 61, 1)" }} />
                        <p className={styles.clock}>{cookTime}</p>
                    </div>
                </div>

                <div className={styles.likes} style={{ color: liked ? "red" : "rgba(0, 31, 61, 1)" }} onClick={toggleLike}>
                    {liked ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart style={{ color: "rgba(0, 31, 61, 1)" }} />}
                </div>
            </div>
        </div>
    );
}