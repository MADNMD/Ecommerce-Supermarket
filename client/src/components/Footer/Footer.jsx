import React from "react";
import styles from './Footer.module.css';
import { Link } from "react-router-dom";

export const Footer = () => {
    return (

        <footer className={styles['site-footer']}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <p>ИНФОРМАЦИЯ</p>
                    <Link to="/price-politic">ВАЖНО - Ценова политика "ПРОЗРАЧНОСТ"</Link>
                    <Link to="/delivery">Доставка и плащане</Link>
                    <Link to="/cookies">Бисквитки / Cookies</Link>
                </div>
                <div className={styles.useful}>
                    <p>ПОЛЕЗНО</p>
                    <Link to="./interesting">Интересно</Link>
                    <Link to="/contacts">Контакти</Link>
                    <Link to="/holiday">Празнично работно време на Магазин VANIMI</Link>
                </div>
                <div className={styles['footer-logo']}>
                    <img src="../images/logo-2.png" alt="" />
                </div>
            </div>
            <div className={styles['pay-info']}>
                <p>Всички цени са с вкл. ДДС</p>
                <div className={styles['card-icon-pay']}>
                    <img src="../images/icon-card-pos-bg.svg" alt="" />
                    <img src="../images/icon-card-cash-hand-bg.svg" alt="" />
                    <img src="../images/icon-card-visa.svg" alt="" />
                    <img src="../images/icon-card-mastercard.svg" alt="" />
                </div>
                <p>Всички права запазени &copy; 2024 </p>
            </div>
        </footer>
        
    )
}