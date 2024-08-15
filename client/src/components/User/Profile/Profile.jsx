import React, { useEffect } from "react";
import styles from './Profile.module.css';
import { Link } from "react-router-dom";
import { useFormik } from 'formik';

import * as profileService from '../../../services/profileService';
import { useAuthContext } from "../../../contexts/authContext";
import { userProfileContext } from "../../../contexts/profileContext";

export const Profile = ({ showNavigationAndFooter }) => {

    const { userId } = useAuthContext();
    const { handleEditProfile } = userProfileContext();

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    useEffect(() => {
        profileService.getUser(userId)
            .then(profileData => {
                formik.setValues({
                    firstName: profileData.firstName || '',
                    lastName: profileData.lastName || '',
                    email: profileData.email || '',
                    telefon: profileData.telefon || '',
                    country: profileData.country || '',
                    district: profileData.district || '',
                    city: profileData.city || '',
                    postCode: profileData.postCode || '',
                    address: profileData.address || ''
                });
            });
    }, [userId]);

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        telefon: '',
        country: '',
        district: '',
        city: '',
        postCode: '',
        address: ''
    }

    const onSubmit = (value) => {
        handleEditProfile(value)
    }

    const validate = (value) => {
        const errors = {}

        if (!value.firstName) {
            errors.firstName = 'Полето е задължително'
        }

        if (!value.lastName) {
            errors.lastName = 'Полето е задължително'
        }

        if (!value.email) {
            errors.email = 'Полето е задължително'
        } else if (/^[a-zA-Z0-9.,!-_]+@[a-zA-Z]+\.[a-zA-Z]$/.test(value.email)) {
            errors.email = 'Невалиден имейл'
        }

        if (!value.telefon) {
            errors.telefon = 'Полето е задължително'
        }

        if (!value.country) {
            errors.country = 'Полето е задължително'
        }

        if (!value.city) {
            errors.city = 'Полето е задължително'
        }

        if (!value.postCode) {
            errors.postCode = 'Полето е задължително'
        }

        if (!value.address) {
            errors.address = 'Полето е задължително'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return (
        <div className={styles.profile}>
            <div className={styles.container}>

                <div className={styles['profile-main-content']}>


                    <div className={styles['mini-nav']}>
                        <Link to="/user/order">Моите поръчки</Link>
                        <Link to="/user/favorites">Любими продукти</Link>
                        <Link to="/user/profile">Моите данни</Link>
                        <Link to="/user/logout">Изход</Link>
                    </div>

                    <div className={styles['profile-content']}>
                        <h3>Моите данни</h3>
                        <div className={styles['profile-form']}>
                            <form action="PUT" onSubmit={formik.handleSubmit}>

                                <div className={styles['first-line']}>
                                    <div className={styles.first}>
                                        <label htmlFor="">Име *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.firstName && formik.errors.firstName ? <span className={styles['errors-form']}>{formik.errors.firstName}</span> : null}
                                    </div>

                                    <div className={styles.second}>
                                        <label htmlFor="">Фамилия *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.lastName && formik.errors.lastName ? <span className={styles['errors-form']}>{formik.errors.lastName}</span> : null}
                                    </div>
                                </div>

                                <div className={styles['second-line']}>
                                    <div className={styles.first}>
                                        <label htmlFor="">E-mail *</label>
                                        <input
                                            type="text"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.email && formik.errors.email ? <span className={styles['errors-form']}>{formik.errors.email}</span> : null}
                                    </div>

                                    <div className={styles.second}>
                                        <label htmlFor="">Телефон *</label>
                                        <input
                                            type="text"
                                            name="telefon"
                                            value={formik.values.telefon}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.telefon && formik.errors.telefon ? <span className={styles['errors-form']}>{formik.errors.telefon}</span> : null}
                                    </div>
                                </div>

                                <div className={styles['third-line']}>
                                    <div className={styles.first}>
                                        <label htmlFor="">Държава *</label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formik.values.country}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.country && formik.errors.country ? <span className={styles['errors-form']}>{formik.errors.country}</span> : null}
                                    </div>

                                    <div className={styles.second}>
                                        <label htmlFor="">Област</label>
                                        <input
                                            type="text"
                                            name="district"
                                            value={formik.values.district}
                                            onChange={formik.handleChange}
                                        />
                                    </div>
                                </div>

                                <div className={styles['four-line']}>
                                    <div className={styles.first}>
                                        <label htmlFor="">Град/село *</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formik.values.city}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.city && formik.errors.city ? <span className={styles['errors-form']}>{formik.errors.city}</span> : null}
                                    </div>

                                    <div className={styles.second}>
                                        <label htmlFor="">Пощенски код *</label>
                                        <input
                                            type="text"
                                            name="postCode"
                                            value={formik.values.postCode}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.postCode && formik.errors.postCode ? <span className={styles['errors-form']}>{formik.errors.postCode}</span> : null}
                                    </div>
                                </div>

                                <div className={styles['five-line']}>
                                    <div className={styles.first}>
                                        <label htmlFor="">Адрес *</label>
                                        <textarea
                                            name="address"
                                            cols="59"
                                            rows="2"
                                            value={formik.values.address}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        ></textarea>
                                        {formik.touched.address && formik.errors.address ? <span className={styles['errors-form']}>{formik.errors.address}</span> : null}
                                    </div>
                                </div>
                                <button type="submit" className={styles['save-btn']}>Запази</button>
                                {/* <div className={styles['save-btn']}><Link type="submit" to="">Запази</Link></div> */}
                            </form>
                        </div>
                        <p>Отбелязаните с * полета са задължителни</p>
                    </div>

                </div>

            </div>

        </div>
    )
}