import React, { useEffect } from "react";
import styles from './Login.module.css';
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../contexts/authContext";
import { useFormik } from "formik";

export const Login = ({ hideNavigationAndFooter }) => {

    useEffect(() => {
        hideNavigationAndFooter();
    }, [hideNavigationAndFooter])

    const { onLoginSubmit } = useAuthContext();

    const initialValues = {
        email: '',
        password: ''
    };

    const onSubmit = (value) => {
        onLoginSubmit(value);
    }

    const validate = (value) => {
        const errors = {};
        const corectEmail = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!value.email) {
            errors.email = 'Полето е задължително!'
        }else if(!corectEmail.test(value.email)) {
            errors.email = 'Въвели сте невалиден имейл адрес'
        }

        if (!value.password) {
            errors.password = 'Полето е задължително!'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (

        <div className={styles['site-login']}>


            <div className={styles['login-logo']}>
                <Link to="/"><img src="../images/logo-2.png" alt="" /></Link>
            </div>
            <div className={styles.container}>
                <div className={styles['login-form']}>
                    <div className={styles['login-pic']}>
                        <i className="fa-regular fa-user"></i>
                        <div className={styles['login-content']}>
                            <p>Здравей!</p>
                        </div>
                    </div>
                    <div className={styles['login-form']}>
                        <form action="POST" onSubmit={formik.handleSubmit}>
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
                            <button className={styles['login-btn']} type="submit">Вход</button>
                            {/* <Link className={styles['login-btn']} to="/user/order">Вход</Link> */}
                        </form>
                    </div>
                    <p className={styles['last-child']}>Нямаш регистрация?<span><Link to="/user/register">Натисни тук.</Link></span></p>
                </div>
            </div>
        </div>
    )
}