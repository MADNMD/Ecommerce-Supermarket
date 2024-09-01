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
                                <h6>Рецепти за постния ястия</h6>
                                <LuVegan />
                            </div>
                            <div className={styles.content}>
                                <p>Бързи и лесни за приготвяне с традицонни вкусове</p>
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
                                <h6>Рецепти за местни ястия</h6>
                                <TbMeat />
                            </div>
                            <div className={styles.content}>
                                <p>Бързи и лесни за приготвяне с традицонни вкусове</p>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className={styles['line-2']}>
                    <div className={styles['card-1']}></div>
                    <div className={styles['card-2']}></div>
                    <div className={styles['card-3']}></div>
                    <div className={styles['card-4']}></div>
                </div>
            </div>
        </div>
    )
}