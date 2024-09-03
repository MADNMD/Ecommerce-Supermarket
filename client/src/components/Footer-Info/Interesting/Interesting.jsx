import React, { useEffect } from "react";
import styles from './Interesting.module.css';
import { Link } from "react-router-dom";
import { LuVegan } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";

export const Interesting = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);


    return (
        <div className={styles.interesting}>
            <div className={styles.container}>

                <div className={styles['interesting-img']}>
                    <img src="../../images/interesting.png" alt="interesting" />
                </div>

                <div className={styles['line-1']}>

                    <div className={styles['card-1']}>
                        <Link>
                            <div className={styles['card-1-img']}>
                                <img src="../../images/interesting-img/postno.webp" alt="postno" />
                            </div>
                            <div className={styles.header}>
                                <h6>Бързи и лесни за приготвяне рецепти на постни ястия</h6>
                                <LuVegan />
                            </div>
                        </Link>
                    </div>

                    <div className={styles['card-2']}>
                        <div className={styles['card-2-img']}>
                            <img src="../../images/interesting-img/cake.webp" alt="postno" />
                        </div>
                    </div>

                    <div className={styles['card-3']}>
                        <Link>
                            <div className={styles['card-3-img']}>
                                <img src="../../images/interesting-img/mestni.jpg" alt="mestni" />
                            </div>
                            <div className={styles.header}>
                                <h6>Бързи и лесни за приготвяне рецепти на месни ястия</h6>
                                <TbMeat />
                            </div>
                        </Link>
                    </div>

                </div>

                <div className={styles['line-2']}>
                    <div className={styles['card-1']}>
                        <Link>
                            <div className={styles['card-1-img']}>
                                <img src="../../images/interesting-img/desert.jpg" alt="postno" />
                            </div>
                            <div className={styles.header}>
                                <h6>Бързи и лесни за приготвяне рецепти на вкусни десерти</h6>
                                <LuVegan />
                            </div>
                        </Link>
                    </div>
                    <div className={styles['card-2']}>

                        <Link to={'/soups-recipies'}>
                            <div className={styles['card-2-img']}>
                                <img src="../../images/interesting-img/supa.jpg" alt="postno" />
                            </div>
                            <div className={styles.header}>
                                <h6>Бързи и лесни за приготвяне рецепти на вкусни супи</h6>
                            </div>
                        </Link></div>
                    <div className={styles['card-3']}>
                        <Link>
                            <div className={styles['card-3-img']}>
                                <img src="../../images/interesting-img/salata.jpeg" alt="postno" />
                            </div>
                            <div className={styles.header}>
                                <h6>Бързи и лесни за приготвяне рецепти на вкусни салати</h6>
                            </div>
                        </Link>
                    </div>
                    <div className={styles['card-4']}>
                        <Link>
                            <div className={styles['card-4-img']}>
                                <img src="../../images/interesting-img/smoothie.png" alt="postno" />
                            </div>
                            <div className={styles.header}>
                                <h6>Бързи и лесни за приготвяне рецепти на вкусни смутита</h6>
                                <LuVegan />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}