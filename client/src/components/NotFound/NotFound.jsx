import React from 'react';
import styles from './NotFound.module.css';
import { Link, useNavigate } from "react-router-dom";

export const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className={styles['not-found-container']}>
            <div className={styles['not-found-text']}>404</div>
            <div className={styles['not-found-message']}>
                <p> Страницата не беше намерена</p>
                <p>Не успяхме да открием страницата, която търсите. Може би е преместена или изтрита.</p>
                <p>Можете да опитате следните решения:</p>
                <ul>
                    <li>
                        Ако сте въвели адреса на страницата ръчно, проверете дали той е написан вярно, дали има главни букви и т.н.
                    </li>
                    <li>
                        Върнете се на <span><Link to={'/'}>началната страница на сайта</Link></span> и опитайте отново да откриете търсената информация.
                    </li>
                    <li>
                        Използвайте бутона <span className={styles['back-btn']} onClick={() => navigate(-1)}>"Назад"</span> на браузера си, за да пробвате друг линк.
                    </li>
                </ul>
            </div>
        </div>
    )
}