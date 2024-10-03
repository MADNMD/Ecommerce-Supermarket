import React, { useContext, useEffect, useState } from "react";
import styles from './MyCartOrder.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import PacmanLoader from "react-spinners/PacmanLoader";

import { ProfileContext } from "../../../contexts/profileContext";
import { useAuthContext } from "../../../contexts/authContext";
import * as emailService from '../../../services/emailService';
import * as profileService from '../../../services/profileService';
import * as productService from '../../../services/productService';

export const MyCartOrder = ({ hideNavigationAndFooter }) => {

    const { userId } = useAuthContext();
    const { firstName, lastName, telefon, email, handleEditProfile } = useContext(ProfileContext);
    const [profile, setProfile] = useState({});
    const [cartProduct, setCartProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState('rgba(239, 133, 53, 1)');
    const [countDetails, setCountDetails] = useState([]);
    const deliveryPrice = 6.90;
    const navigate = useNavigate();

    useEffect(() => {
        hideNavigationAndFooter();
    }, [hideNavigationAndFooter]);

    useEffect(() => {
        profileService.getUser(userId)
            .then(userProfile => {
                setProfile(userProfile)
                // console.log(userProfile);
            })
            .catch(error => {
                console.log(error);
            })
    }, [userId]);

    useEffect(() => {
        const getCartProducts = localStorage.getItem('carts');
        const cartParsed = getCartProducts ? JSON.parse(getCartProducts) : {};
        setCartProducts(cartParsed[userId] || []);
        // const getCartProducts = localStorage.getItem('carts');

        // if (getCartProducts) {
        //     const cartParsed = JSON.parse(getCartProducts);

        //     if (cartParsed && cartParsed[userId]) {
        //         setCartProducts(cartParsed[userId]);
        //     }
        // }
    }, [userId]);

    useEffect(() => {
        const calculateTotalPrice = () => {

            let total = 0;
            const newCountDetails = [];

            cartProduct.forEach(product => {
                let price
                // if (product.unitQuantity >= 100 && product.category === 'Зеленчуци и плодове') {
                if (product.unitQuantity >= 100 &&
                    (product.selectedSubCategory === 'Зеленчуци' ||
                        product.selectedSubCategory === 'Плодове' ||
                        product.selectedSubCategory === 'Маслини' ||
                        product.selectedSubCategory === 'Месо' ||
                        product.selectedSubCategory === 'Риба')) {
                    const unitPrice = product.productNewPrice === null
                        ? product.productPrice * (1000 / product.unitQuantity)
                        : product.productNewPrice * (1000 / product.unitQuantity);
                    price = unitPrice * product.count / 1000; // Умножаваме цената по броя на продуктите и делим на 1000, защото `count` е в грамове
                    total += price;
                } else if (product.productName.includes('ДИНЯ')) {
                    const unitPrice = product.productNewPrice === null
                        ? product.productPrice * (1000 / product.unitQuantity)
                        : product.productNewPrice * (1000 / product.unitQuantity);
                    price = unitPrice * (product.count / 1000) / 1000;
                    total += price;
                    // newCountDetails[product._id] = { count: product.count, price: price.toFixed(2) };
                } else {
                    price = product.productNewPrice === null
                        ? product.productPrice * product.count
                        : product.productNewPrice * product.count
                    total += price;
                }

                // total += price;
                newCountDetails.push({ id: product._id, count: product.count, price: price.toFixed(2) });
                // newCountDetails[product._id] = { count: product.count, price: price.toFixed(2) };
            });

            setCountDetails(newCountDetails);
            setTotalPrice(total.toFixed(2));
        }
        calculateTotalPrice();
    }, [cartProduct]);

    const handlePaymentChange = (event) => {
        formik.setFieldValue('paymentMethod', event.target.value);
    };

    const padToTwoDigits = (num) => num.toString().padStart(2, '0');

    const formatDate = (date) => {
        const day = padToTwoDigits(date.getDate());
        const month = padToTwoDigits(date.getMonth() + 1);
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    };

    const generateNext5days = () => {
        const days = [];
        const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
        let i = 0;

        while (days.length < 5) {
            const date = new Date();
            date.setDate(date.getDate() + i);

            const dayOfWeek = date.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Skip Sunday (0) and Saturday (6)
                days.push({
                    value: formatDate(date),
                    label: date.toLocaleDateString('bg-BG', options)
                });
            }

            i++;
        }
        return days;
    };

    const next5days = generateNext5days();

    const generateCurrentDate = () => {
        const date = new Date();
        return formatDate(date);
    }

    const currentDate = generateCurrentDate();

    const generateOrderNumber = () => {
        return Math.floor(100000000 + Math.random() * 900000000).toString();
    };

    const hourOptions = {
        firstHour: '16:00-17:00',
        secondHour: '17:00-18:00',
        thirdHour: '18:00-19:00',
        fourthHour: '19:00-20:00'
    };

    const hoodOptions = {
        center: 'Център',
        vuzrajdane: 'кв.Възраждане',
        zdravets: 'кв.Здравец',
        rodina: 'кв.Родина',
        lokomotiv: 'кв.Локомотив',
        'drujba-1': 'кв.Дружба-1',
        'drujba-2': 'кв.Дружба-2',
        'drujba-3': 'кв.Дружба-3',
        garata: 'кв.Гарата',
        'charodeika-1': 'кв.Чародейка-1',
        'charodeika-2': 'кв.Чародейка-2'
    }

    const initialValues = {
        day: '',
        hour: '',
        country: 'България',
        city: 'Русе',
        hood: '',
        address: '',
        paymentMethod: '',
        additionalComment: ''
    };

    const updateProductQuantities = async () => {
        try {
            await Promise.all(cartProduct.map(async (product) => {

                if(product.count >= 100){
                    product.count = product.count / 1000;
                }

                const newQuantity = product.productQuantity - product.count;
    
                if (newQuantity < 0) {
                    throw new Error(`Недостатъчна наличност за ${product.productName}`);
                }
    
                await productService.updateProductQuantity(product._id, product.count);
            }));
    
        } catch (error) {
            toast.error(`Грешка при актуализиране на наличностите: ${error.message}`);
            console.error(error);
        }
    };

    const onSubmit = async (values) => {

        const orderNumber = generateOrderNumber();

        const deliveryDetails = {
            ...values,
            hour: hourOptions[values.hour] || values.hour,
            hood: hoodOptions[values.hood] || values.hood,
            countDetails: countDetails
        }

        const userData = {
            firstName,
            lastName,
            email,
            telefon,
            totalPrice,
            orderNumber,
            currentDate,
            deliveryDetails
        };

        const orderData = {
            orderNumber: orderNumber,
            products: cartProduct,
            orderDetails: userData
        };

        profile.orders.push(orderData);

        try {
            setLoading(true);
            await emailService.emailSenderForm(userData);
            // await profileService.editUser(userId, profile);
            handleEditProfile(profile);
            await updateProductQuantities();
            setLoading(false);
            toast.success('Поръчката е направена успешно');
            navigate('/my-cart-ready-order');
        } catch (error) {
            toast.error('Грешка при изпращане на поръчката');
            console.error(error);
        }
    };

    const validate = (values) => {
        const errors = {};

        if (!values.day) {
            errors.day = 'Полето е задължително';
        }

        if (!values.hour) {
            errors.hour = 'Полето е задължително';
        }

        if (!values.hood) {
            errors.hood = 'Полето е задължително';
        }

        if (!values.address) {
            errors.address = 'Полето е задължително';
        } else if (values.address.length > 300) {
            errors.address = 'Твърде голямо съдържание'
        } else if (values.address.length < 6) {
            errors.address = 'Невалиден адрес'
        }

        if (!values.paymentMethod) {
            errors.paymentMethod = 'Трябва да изберете опция за плащане';
        }

        return errors
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

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
                : <div className={styles['site-myCartOrder']}>

                    <div className={styles['myCartOrder-logo']}>
                        <Link to="/"><img src="./images/logo-2.png" alt="" /></Link>
                    </div>

                    <div className={styles['myCartOrder-nav']}>
                        <div className={styles['mini-nav-oreder']}>
                            <p>•</p>
                            <p>-----------------------------</p>
                            <p>•</p>
                            <p>------------------------------</p>
                            <p>•</p>
                            <p>------------------------------</p>
                            <p>•</p>
                        </div>
                        <div className={styles['mini-nav-order-steps']}>
                            <p>Пазаруване</p>
                            <p>Преглед</p>
                            <p>Данни за поръчката</p>
                            <p>Готово</p>
                        </div>

                    </div>
                    <div className={styles.container}>
                        <h3>Данни за поръчката</h3>

                        <div className={styles['data-order']}>

                            <div className={styles['myCartOrder-personalData']}>
                                <p>Лични данни</p>
                                <p>{firstName} {lastName}</p>
                                <p>{telefon},<span> {email}</span></p>
                                <p>Доставка</p>
                                <div className={styles['myCartOrder-personalData-form']}>
                                    <form onSubmit={formik.handleSubmit}>
                                        <label htmlFor="">Доставка до адрес *</label>
                                        <div className={styles['form-day-hour']}>
                                            <select
                                                name="day"
                                                id="day"
                                                value={formik.values.day}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className={formik.touched.day && formik.errors.day ? styles.selectInput : ""}
                                            >
                                                <option value="day-option">Избери ден</option>
                                                {next5days.map(day => (
                                                    <option key={day.value} value={day.value}>{day.label}</option>
                                                ))}
                                            </select>
                                            <select
                                                name="hour"
                                                id="hour"
                                                value={formik.values.hour}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className={formik.touched.hour && formik.errors.hour ? styles.selectInput : ""}
                                            >
                                                <option value="hour-option">Избери час</option>
                                                <option value="firstHour">16:00-17:00</option>
                                                <option value="secondHour">17:00-18:00</option>
                                                <option value="thirdHour">18:00-19:00</option>
                                                <option value="fourthHour">19:00-20:00</option>
                                            </select>
                                        </div>
                                        <div className={styles['country-city']}>
                                            <select
                                                name="country"
                                                id="country"
                                                value={formik.values.country}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            >
                                                <option value="bulgaria">България</option>
                                            </select>
                                            <select
                                                name="city"
                                                id="city"
                                                value={formik.values.city}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            >
                                                <option value="ruse">Русе</option>
                                            </select>
                                        </div>
                                        <div className={styles.hood}>
                                            <select
                                                name="hood"
                                                id="hood"
                                                value={formik.values.hood}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className={formik.touched.hood && formik.errors.hood ? styles.selectInput : ""}
                                            >
                                                <option value="hood">Избери район</option>
                                                <option value="center">Център</option>
                                                <option value="vuzrajdane">кв.Възраждане</option>
                                                <option value="zdravets">кв.Здравец</option>
                                                <option value="rodina">кв.Родина</option>
                                                <option value="lokomotiv">кв.Локомотив</option>
                                                <option value="drujba-1">кв.Дружба-1</option>
                                                <option value="drujba-2">кв.Дружба-2</option>
                                                <option value="drujba-3">кв.Дружба-3</option>
                                                <option value="garata">кв.Гарата</option>
                                                <option value="charodeika-1">кв.Чародейка-1</option>
                                                <option value="charodeika-2">кв.Чародейка-2</option>
                                            </select>
                                        </div>
                                        <label htmlFor="address">Адрес за доставка *</label>
                                        <textarea
                                            name="address"
                                            id="address"
                                            cols="45"
                                            rows="3"
                                            value={formik.values.address}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            className={formik.touched.address && formik.errors.address ? styles.selectInput : ""}
                                        ></textarea>
                                        {formik.touched.address && formik.errors.address ? (
                                            <span className={styles['error-addres']}>
                                                {formik.errors.address !== "Полето е задължително" &&
                                                    formik.errors.address}
                                            </span>
                                        ) : null}
                                        <div className={styles['pay-method']}>
                                            <p>Начин на плащане *</p>
                                            <p><input
                                                type="checkbox"
                                                value='В брой'
                                                name="paymentMethod"
                                                checked={formik.values.paymentMethod === 'В брой'}
                                                // onChange={formik.handleChange}
                                                onChange={handlePaymentChange}
                                                onBlur={formik.handleBlur}
                                                placeholder="В брой"
                                            />В брой</p>
                                            <p><input
                                                type="checkbox"
                                                value='ПОС терминал'
                                                name="paymentMethod"
                                                checked={formik.values.paymentMethod === 'ПОС терминал'}
                                                // onChange={formik.handleChange}
                                                onChange={handlePaymentChange}
                                                placeholder="ПОС терминал"
                                            />ПОС терминал</p>
                                        </div>
                                        {formik.touched.paymentMethod && formik.errors.paymentMethod ? <span className={styles['errors-form']}>{formik.errors.paymentMethod}</span> : null}
                                        <div className={styles['comments-order']}>
                                            <p>Коментар</p>
                                            <p>** Ако имате нужда от <span>ескпресна доставка</span> , молим да оставите коментар и наш
                                                служител ще
                                                се свърже с Вас, за да потвърди възможността да ви обслужим с приоритет.
                                                Условията за експресна доставка може да разгледате <Link to="/delivery">тук</Link>.
                                            </p>
                                            <textarea
                                                name="additionalComment"
                                                id="additionalComment"
                                                cols="45"
                                                rows="5"
                                                value={formik.values.additionalComment}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                            ></textarea>
                                            {formik.touched.additionalComment && formik.errors.additionalComment ? <span className={styles['errors-form']}>{formik.errors.additionalComment}</span> : null}
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className={styles['myCartOrder-personalOrder']}>
                                <p>Поръчка</p>
                                <div className={styles['personalOrder-countProduct']}>
                                    {cartProduct.map(product => {
                                        let count;
                                        if (product.count === 201) {
                                            count = 200;
                                        } else {
                                            count = product.count;
                                        }

                                        const price = product.productNewPrice === null
                                            ? (product.productPrice * product.count).toFixed(2)
                                            : (product.productNewPrice * product.count).toFixed(2);
                                        return (
                                            <p key={product._id}>
                                                {product.productName}
                                                {count >= 1000
                                                    ? <span>x{count / 1000}кг</span>
                                                    : product.unitsKilogram === 'Бр'
                                                        ? <span>x{count}бр</span>
                                                        : <span>x{count}г</span>
                                                }
                                                {product.unitQuantity >= 100 &&
                                                    (product.selectedSubCategory === 'Зеленчуци' ||
                                                        product.selectedSubCategory === 'Плодове' ||
                                                        product.selectedSubCategory === 'Маслини' ||
                                                        product.selectedSubCategory === 'Месо' ||
                                                        product.selectedSubCategory === 'Риба')
                                                    ? <span>{(price * (1000 / product.unitQuantity) / 1000).toFixed(2)}лв</span>
                                                    : product.productName.includes('ДИНЯ')
                                                        ? <span>{(price / 1000).toFixed(2)}лв</span>
                                                        : <span>{price}лв</span>

                                                }
                                            </p>
                                        );
                                    })}
                                </div>
                                <p className={styles['count-product']}><span>{cartProduct.length} {cartProduct.length > 1 ? 'продуктa' : 'продукт'}, общо:</span>{totalPrice}лв</p>
                                <p className={styles['delivery-price']}><span>Цена за доставка:</span>{deliveryPrice.toFixed(2)}лв.</p>
                                <p className={styles['total-personalOrder-price']}>Общо:<span>{(Number(totalPrice) + deliveryPrice).toFixed(2)}лв.</span></p>
                                <button className={styles.orderBtn} onClick={formik.handleSubmit} type="submit"><i className="fa-solid fa-cart-shopping"></i>ПОРЪЧКА</button>
                            </div>

                        </div>

                    </div>
                </div>
            }
        </>
    )
}