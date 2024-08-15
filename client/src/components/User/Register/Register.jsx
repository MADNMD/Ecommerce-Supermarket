import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useFormik } from 'formik';

import styles from './Register.module.css';


import { useAuthContext } from "../../../contexts/authContext";

export const Register = ({ hideNavigationAndFooter }) => {

    useEffect(() => {
        hideNavigationAndFooter();
    }, [hideNavigationAndFooter]);

    const { onRegisterSubmit } = useAuthContext();

    const initialValues = {
        email: '',
        password: '',
        rePassword: ''
    };

    const onSubmit = (values) => {
        onRegisterSubmit({...values, firstName: '', lastName: '', telefon: '', country: '', district: '', city: '', postCode: '', address: ''})
    };

    const validate = (values) => {
        const errors = {};
        const corectEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!values.email) {
            errors.email = 'Полето е задължително!';
        }else if(!corectEmail.test(values.email)) {
            errors.email = 'Въвели сте невалиден имейл адрес'
        }

        if (!values.password) {
            errors.password = 'Полето е задължително!';
        }

        if (!values.rePassword) {
            errors.rePassword = 'Полето е задължително!';
        }

        if (values.password !== values.rePassword) {
            errors.password = 'Паролите не съвпадат';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (

        <div className={styles['site-register']}>

            <div className={styles['register-logo']}>
                <Link to="/"><img src="../images/logo-2.png" alt="" /></Link>
            </div>
            <div className={styles.container}>
                <div className={styles['register-form']}>
                    <div className={styles['register-pic']}>
                        <i className="fa-regular fa-user"></i>
                        <div className={styles['register-content']}>
                            <p>Здравей!</p>
                        </div>
                    </div>
                    <div className={styles['register-form']}>
                        <form action="post" onSubmit={formik.handleSubmit}>
                            <div className={styles.email}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? <span className={styles['errors-form']}>{formik.errors.email}</span> : null}
                            </div>
                            <div className={styles.password}>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.password && formik.errors.password ? <span className={styles['errors-form']}>{formik.errors.password}</span> : null}
                            </div>
                            <div className={styles.rePassword}>
                                <input
                                    type="password"
                                    name="rePassword"
                                    placeholder="repeat password"
                                    value={formik.values.rePassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.rePassword && formik.errors.rePassword ? <span className={styles['errors-form']}>{formik.errors.rePassword}</span> : null}
                            </div>
                            <button className={styles['register-btn']} type="submit">Регистрация</button>
                            {/* <Link className={styles['register-btn']} to="/user/order">Регистрация</Link> */}
                        </form>
                    </div>
                    <p className={styles['last-child']}>Вече си се регистрирал?<span><Link to="/user/login">Натисни тук.</Link></span></p>
                </div>
            </div>
        </div>
    )
}