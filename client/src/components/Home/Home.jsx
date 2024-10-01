import React, { useEffect, useState } from "react";
import styles from './Home.module.css';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import PacmanLoader from "react-spinners/PacmanLoader";

import * as emailService from '../../services/emailService';
import { clients } from '../../clients';

export const Home = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    const [text, setText] = useState('');
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState('rgba(239, 133, 53, 1)')
    const [randomClients, setRandomClients] = useState({});
    const [randomClients2, setRandomClients2] = useState({});

    useEffect(() => {
        if (clients.length > 0) {
            const randomIndex = Math.floor(Math.random() * clients.length);
            const randomIndex2 = Math.floor(Math.random() * clients.length);
            setRandomClients(clients[randomIndex]);
            setRandomClients2(clients[randomIndex2]);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setLoading(true);
            await emailService.emailSender(formik.values.email);
            setLoading(false);
            toast.success('Имейлът е изпратен успешно')
            // alert('Имейлът е изпратен успешно');
            setText(formik.values.email);
            setText(''); // Зануляване на стойността на полето за имейл
            formik.setFieldValue('email', '', false);

        } catch (error) {
            toast.error('Грешка при изпращане на имейл')
            // alert('Грешка при изпращане на имейл');
            console.error(error);
        }
    }

    const initialValues = {
        email: ''
    }

    const onSubmit = (value) => {
        handleSubmit(value)
    }

    const validate = (value) => {
        const errors = {};

        if (!value.email) {
            errors.email = 'Моля въведи своя имейл за да се запишеш за нашия бюлетин.'
        } else if (!/^[a-zA-Z0-9.,!-_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(value.email)) {
            errors.email = 'Моля въведете валиден имейл адрес!'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    const cssLoader = {
        display: "block",
        margin: "270px auto 0 auto",
    };

    return (

        <>
            {loading
                ? <PacmanLoader
                    color={color}
                    // loading={loading}
                    cssOverride={cssLoader}
                    size={70}
                />
                : <div className={styles['site-home']}>
                    <div className={styles.container}>

                        <div className={styles['main-header']}>
                            <h1>НИЕ ПАЗАРУВАМЕ ВМЕСТО ВАС!</h1>
                            <p>От <span>понеделник</span> до <span>петък</span>, ще доставяме всичко, което ви е необходимо,
                                до прага на вашата врата -
                                пресни плодове и зеленчуци, млечни продукти, прясно месо и риба,
                                здравословни продукти, алкохолни и безалкохолни напитки, козметика, стоки за бита и много
                                други!
                            </p>
                        </div>

                        <div className={styles['clients']}>
                            <h4>СПОДЕЛЕНО ОТ КЛИЕНТИТЕ НА VANIMI - ОНЛАЙН СУПЕРМАРКЕТ</h4>
                            <div className={styles['client-cards']}>

                                <div className={styles.card}>
                                    <div className={styles['client-img']}>
                                        <img src="/public/images/profil-pic.png" alt="" />
                                        <div className={styles['client-rating']}>
                                            <span>{randomClients.rating}</span>
                                            <span>/</span>
                                            <span>5</span>
                                        </div>
                                    </div>
                                    <div className={styles['client-info']}>
                                        <h6>{randomClients.header}</h6>
                                        <p className={styles['text-info']}>{randomClients.description}</p>
                                        <p>{randomClients.name}</p>
                                    </div>
                                </div>

                                <div className={styles.card}>
                                    <div className={styles['client-img']}>
                                        <img src="images/profil-pic.png" alt="" />
                                        <div className={styles['client-rating']}>
                                            <span>{randomClients2.rating}</span>
                                            <span>/</span>
                                            <span>5</span>
                                        </div>
                                    </div>
                                    <div className={styles['client-info']}>
                                        <h6>{randomClients2.header}</h6>
                                        <p className={styles['text-info']}>{randomClients2.description}</p>
                                        <p>{randomClients2.name}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className={styles.subscribe}>
                            <h3>АБОНИРАЙ СЕ ЗА БЮЛЕТИНА НИ</h3>
                            <p>Ще научаваш първи за новите промоции!</p>
                            <form action="POST" onSubmit={formik.handleSubmit}>
                                <div className={styles['send-email']}>
                                    <div className={styles['send-email2']}>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formik.values?.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.email && formik.errors.email ? <span className={styles['errors-form']}>{formik.errors.email}</span> : null}
                                    </div>
                                    <a onClick={handleSubmit} type="submit" href="">ИЗПРАТИ</a>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            }
        </>
    )
}