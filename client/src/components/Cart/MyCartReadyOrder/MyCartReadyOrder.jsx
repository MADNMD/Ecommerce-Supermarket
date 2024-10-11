import React, { useContext, useEffect, useState } from "react";
import styles from './MyCartReadyOrder.module.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import PacmanLoader from "react-spinners/PacmanLoader";
import emailjs from '@emailjs/browser';

import * as profileService from '../../../services/profileService';
import * as emailService from '../../../services/emailService';
import { useAuthContext } from "../../../contexts/authContext";

export const MyCartReadyOrder = ({ hideNavigationAndFooter }) => {

    const {userId} = useAuthContext();
    const [orderNumber, setOrderNumber] = useState('');
    const [color, setColor] = useState('rgba(239, 133, 53, 1)');
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        hideNavigationAndFooter();
    }, [hideNavigationAndFooter]);

    useEffect(() => {
        profileService.getUser(userId)
            .then(userData => {
                // const lastOrderNumber = userData.orders.slice(-1)[0];
                // if (lastOrderNumber) {
                //     setOrderNumber(lastOrderNumber.orderNumber);
                // }
                const lastOrderNumber = userData.orders.slice(-1);
                lastOrderNumber.map(details => setOrderNumber(details.orderNumber));
            })
            .catch(error => {
                console.log(error);
            })
    }, [userId]);

    const initialValues = {
        email: ''
    }

    const onSubmit = async (value) => {

        try {
            setLoading(true);
            await emailjs.send('service_wndsls8', 'template_tguokqm', { email: value.email }, 'OiRlR9J1UKxRQbHoS');
            // emailService.emailSender(value.email);
            setLoading(false);
            toast.success('Имейлът е изпратен успешно');
            setText(formik.values.email);
            setText(''); // Зануляване на стойността на полето за имейл
            formik.setFieldValue('email', '', false);
        } catch (error) {
            toast.error('Грешка при изпращане на имейл');
            console.log(error);
        }
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

    return (

        <>
            {
                loading
                    ? <PacmanLoader
                        color={color}
                        // loading={loading}
                        cssOverride={cssLoader}
                        size={70}
                    />
                    : <div className={styles['site-myCartReadyOrder']}>

                        <div className={styles['myCartReadyOrder-logo']}>
                            <Link to="/"><img src="./images/logo-2.png" alt="" /></Link>
                        </div>


                        <div className={styles['myCartReadyOrder-nav']}>
                            <div className={styles['mini-nav-ready-oreder']}>
                                <p>•</p>
                                <p>-----------------------------</p>
                                <p>•</p>
                                <p>------------------------------</p>
                                <p>•</p>
                                <p>------------------------------</p>
                                <p>•</p>
                            </div>
                            <div className={styles['mini-nav-ready-order-steps']}>
                                <p>Пазаруване</p>
                                <p>Преглед</p>
                                <p>Данни за поръчката</p>
                                <p>Готово</p>
                            </div>

                        </div>
                        <div className={styles.container}>

                            <div className={styles['data-ready-order']}>

                                <div className={styles['flag-icon']}>
                                    <i className="fa-solid fa-flag-checkered"></i>
                                </div>
                                <div className={styles['data-ready-order-content']}>

                                    <h3>Благодарим ти, твоята поръчка е <span>приета</span>!</h3>
                                    <p>Не имейла си ще получиш копие от поръчката. Номерът на поръчката е: <span>{orderNumber}</span>
                                    </p>
                                    <p>Сега на къде?</p>
                                    <p>Ето няколко предложения от нас:</p>
                                    <div className={styles.suggetstions}>
                                        <div className={styles['suggestions-1']}>
                                            <p>1</p>
                                            <div className={styles['suggestions-1-content']}>
                                                <h6>Абонирай се за нашия бюлетин!</h6>
                                                <p>Така първи ще разбираш за най новите промоции и оферти</p>
                                                <div className={styles['suggestion-1-content-form']}>
                                                    <form onSubmit={formik.handleSubmit}>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            placeholder="email"
                                                            value={formik.values.email}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                        />
                                                        <button type="submit" className={styles['suggestion-1-content-form-btn']} to="">Изпрати</button>
                                                        {formik.touched.email && formik.errors.email ? <span className={styles['errors-form']}>{formik.errors.email}</span> : null}
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles['suggestions-2']}>
                                            <p>2</p>
                                            <div className={styles['suggestions-2-content']}>
                                                <h6>Последвай ни в социалните мрежи и сподели с приятели!</h6>
                                                <div className={styles['suggestion-2-content-icon']}>
                                                    <Link to="https://github.com/MADNMD"><i className="fa-brands fa-github"></i></Link>
                                                    <Link to="https://www.linkedin.com/in/mihail-donchev-6a400025a/"><i className="fa-brands fa-linkedin"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
            }
        </>


    )
}