import React, { useEffect, useState } from "react";
import styles from '../Recipies.module.css';
import { FaHeart, FaClock } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Soups = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);

    const toggleLike = () => {
        if (liked) {
            setLikesCount(likesCount - 1);
        } else {
            setLikesCount(likesCount + 1);
        }

        setLiked(!liked);
    }


    return (
        <div className={styles['recipies-container']}>
            <h2>Рецепти за вкусни супи</h2>
            <div className={styles['recipes-cards']}>

                <div className={styles['recipes-card']}>
                    <Link>
                        <div className={styles['recipies-img']}>
                            <img src="https://www.supichka.com/files/images/3362/fit_1400_933.jpg" alt="chicken-soup" />
                        </div>

                        <h6>Супа от пилешки дреболии</h6>
                    </Link>

                    <div className={styles['recipies-content']}>
                        <div className={styles.icons}>
                            <div className={styles.heart}>
                                <FaHeart />
                                <p className={styles.count}>{likesCount}</p>
                            </div>
                            <div className={styles.clock}>
                                <FaClock />
                                <p className={styles.clock}>60 мин</p>
                            </div>
                        </div>

                        <div className={styles.likes} style={{ color: liked ? "red" : "black" }} onClick={toggleLike}>
                            {liked ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart style={{ color: "black" }} />}
                        </div>
                    </div>
                </div>

                <div className={styles['recipes-card']}>
                    <Link>
                        <div className={styles['recipies-img']}>
                            <img src="https://www.supichka.com/files/images/3353/fit_1400_933.jpg" alt="chicken-soup" />
                        </div>

                        <h6>Агнешка супа със застройка</h6>

                        <div className={styles['recipies-content']}>
                            <div className={styles.icons}>
                                <div className={styles.heart}>
                                    <FaHeart />
                                    <p className={styles.count}>{likesCount}</p>
                                </div>
                                <div className={styles.clock}>
                                    <FaClock />
                                    <p className={styles.clock}>60 мин</p>
                                </div>
                            </div>

                            <div className={styles.likes} onClick={toggleLike}>
                                <FaRegHeart />
                            </div>
                        </div>
                    </Link>
                </div>

                <div className={styles['recipes-card']}>
                    <Link>
                        <div className={styles['recipies-img']}>
                            <img src="https://www.supichka.com/files/images/3300/fit_1400_933.jpg" alt="chicken-soup" />
                        </div>

                        <h6>Пилешка крем супа</h6>

                        <div className={styles['recipies-content']}>
                            <div className={styles.icons}>
                                <div className={styles.heart}>
                                    <FaHeart />
                                    <p className={styles.count}>{likesCount}</p>
                                </div>
                                <div className={styles.clock}>
                                    <FaClock />
                                    <p className={styles.clock}>60 мин</p>
                                </div>
                            </div>

                            <div className={styles.likes}>
                                <p>10</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className={styles['recipes-card']}>
                    <Link>
                        <div className={styles['recipies-img']}>
                            <img src="https://www.supichka.com/files/images/3174/fit_1400_933.jpg" alt="chicken-soup" />
                        </div>

                        <h6>Супа със соев сос, скариди и спагети</h6>

                        <div className={styles['recipies-content']}>
                            <div className={styles.icons}>
                                <div className={styles.heart}>
                                    <FaHeart />
                                    <p className={styles.count}>{likesCount}</p>
                                </div>
                                <div className={styles.clock}>
                                    <FaClock />
                                    <p className={styles.clock}>60 мин</p>
                                </div>
                            </div>

                            <div className={styles.likes}>
                                <p>10</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className={styles['recipes-card']}>
                    <Link>
                        <div className={styles['recipies-img']}>
                            <img src="https://www.supichka.com/files/images/3272/fit_1400_933.jpg" alt="chicken-soup" />
                        </div>

                        <h6>Доматена супа с печени чушки</h6>

                        <div className={styles['recipies-content']}>
                            <div className={styles.icons}>
                                <div className={styles.heart}>
                                    <FaHeart />
                                    <p className={styles.count}>{likesCount}</p>
                                </div>
                                <div className={styles.clock}>
                                    <FaClock />
                                    <p className={styles.clock}>60 мин</p>
                                </div>
                            </div>

                            <div className={styles.likes}>
                                <p>10</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className={styles['recipes-card']}>
                    <Link>
                        <div className={styles['recipies-img']}>
                            <img src="https://www.supichka.com/files/images/2962/fit_1400_933.jpg" alt="chicken-soup" />
                        </div>

                        <h6>Бял курбан</h6>

                        <div className={styles['recipies-content']}>
                            <div className={styles.icons}>
                                <div className={styles.heart}>
                                    <FaHeart />
                                    <p className={styles.count}>10</p>
                                </div>
                                <div className={styles.clock}>
                                    <FaClock />
                                    <p className={styles.clock}>60 мин</p>
                                </div>
                            </div>

                            <div className={styles.likes}>
                                <p>10</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className={styles['recipes-card']}>
                    <Link>
                        <div className={styles['recipies-img']}>
                            <img src="https://www.supichka.com/files/images/2946/fit_1400_933.jpg" alt="chicken-soup" />
                        </div>

                        <h6>Пилешка супа с пресечена застройка</h6>

                        <div className={styles['recipies-content']}>
                            <div className={styles.icons}>
                                <div className={styles.heart}>
                                    <FaHeart />
                                    <p className={styles.count}>10</p>
                                </div>
                                <div className={styles.clock}>
                                    <FaClock />
                                    <p className={styles.clock}>60 мин</p>
                                </div>
                            </div>

                            <div className={styles.likes}>
                                <p>10</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className={styles['recipes-card']}>
                    <Link>
                        <div className={styles['recipies-img']}>
                            <img src="https://www.supichka.com/files/images/2613/fit_1400_933.jpg" alt="chicken-soup" />
                        </div>

                        <h6>Телешко варено</h6>

                        <div className={styles['recipies-content']}>
                            <div className={styles.icons}>
                                <div className={styles.heart}>
                                    <FaHeart />
                                    <p className={styles.count}>10</p>
                                </div>
                                <div className={styles.clock}>
                                    <FaClock />
                                    <p className={styles.clock}>60 мин</p>
                                </div>
                            </div>

                            <div className={styles.likes}>
                                <p>10</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className={styles['recipes-card']}>
                    <Link>
                        <div className={styles['recipies-img']}>
                            <img src="https://www.supichka.com/files/images/2556/fit_1400_933.jpg" alt="chicken-soup" />
                        </div>

                        <h6>Студена крем супа от карфиол</h6>

                        <div className={styles['recipies-content']}>
                            <div className={styles.icons}>
                                <div className={styles.heart}>
                                    <FaHeart />
                                    <p className={styles.count}>10</p>
                                </div>
                                <div className={styles.clock}>
                                    <FaClock />
                                    <p className={styles.clock}>60 мин</p>
                                </div>
                            </div>

                            <div className={styles.likes}>
                                <p>10</p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}