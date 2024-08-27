import React, { useEffect } from "react";
import styles from './Holiday.module.css';

export const Holiday = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    return (

        <div className={styles.holiday}>
            <div className={styles.container}>
                <h3>Празнично работно време</h3>
                <div className={styles['holiday-img']}>
                    <img src="./images/Easter_eggs.jpg" alt="" />
                        <div className={styles['holiday-img-text']}>
                            <p>УВАЖАЕМИ КЛИЕНТИ,</p>
                            <p>УВЕДОМЯВАМЕ ВИ, ЧЕ ВЪВ ВРЪЗКА</p>
                            <p>СПРЕДСОЯЩИТЕ ПРАЗНИЦИ,</p>
                            <p>РАБОТНОТО ВРЕМЕ НА МАГАЗИН VANIMI</p>
                            <p>ЩЕ БЪДЕ СЛЕДНОТО</p>
                            <p>02.05.2024 - 08:00ч. до 17:00</p>
                            <p>03.05.2024 - 08:00ч. до 14:00</p>
                            <p>04.05.2024 - 08:00ч. до 12:00</p>
                            <p>05.05.2024 - ПОЧИВЕН ДЕН</p>
                            <p>ПРЕЗ ОСТАНАЛИТЕ ДНИ РАБОТНОТО ВРЕМЕ ЩЕ БЪДЕ НЕПРОМЕНЕНО</p>
                        </div>


                </div>

            </div>
        </div>
    )
}