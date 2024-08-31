import React, { useEffect } from "react";
import styles from './Interesting.module.css';
import { Link } from "react-router-dom";

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
                            </div>
                        </Link>
                    </div>

                    <div className={styles['card-2']}>
                    <Link>
                            <div className={styles['card-1-img']}>
                                <img src="../../images/interesting-img/postno.webp" alt="postno" />
                            </div>
                            <div className={styles.header}>
                                <h6>Рецепти за постния ястия</h6>
                            </div>
                        </Link>
                    </div>

                    <div className={styles['card-3']}>
                    <Link>
                            <div className={styles['card-1-img']}>
                                <img src="../../images/interesting-img/postno.webp" alt="postno" />
                            </div>
                            <div className={styles.header}>
                                <h6>Рецепти за постния ястия</h6>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}