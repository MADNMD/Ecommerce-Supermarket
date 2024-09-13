import React, { useEffect, useState } from "react";
import styles from './AdminAddProduct.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { toast } from "react-toastify";

import * as productService from '../../../services/productService';

const categories = {
    'Зеленчуци и плодове': ['Плодове', 'Зеленчуци', 'Севжи салати', 'Свежи подправки', 'Маслини', 'Сушени плодове и зеленчуци', 'Ядки и семена'],
    'Млечни и яйца': ['Пресни млека', 'Кисели млека', 'Плодови млека, млечни напитки и десерти', 'Сирена', 'Кашкавали', 'Масло, сметана и извара', 'Готови салати', 'Яйца'],
    'Месо и риба': ['Месо', 'Месни продукти', 'Риба', 'Суши и рибни продукти'],
    'Хляб и тестени': ['Хляб', 'Багети и тортили', 'Тестени изделия', 'Макаронени изделия', 'Прясна паста'],
    'Сладки и солени': ['Захарни изделия', 'Зърнени Закуски, корнфлейкс и мюсли', 'Солени изделия', 'Чипсове и снаксове'],
    'Напитки и вода': ['Кафе, чай и какао', 'Вода', 'Фрешове, смутита, плодови и зеленчукови напитки', 'Безалкохолни напитки', 'Енергийни напитки, витаминозни и изотонични напитки', 'Сайдер и комбуча', 'Бира', 'Вино', 'Високоалкохолни напитки'],
    'Бебешки и детски': ['Храни', 'Напитки', 'Козметика', 'Пелени и мокри кърпички', 'Перилни препарати и омекотители'],
    'За дома и бита': ['Перилни препарати', 'Почистващи препарати', 'Хартии, салфетки, фолиа, пликов', 'Средства за почистване', 'Ароматизатори и свещи', 'За бита и градината'],
    'Куче и котка': ['Храна за куче', 'Храна за коте', 'Лакомства', 'Аксесоари']
}

export const AdminAddProduct = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    const [addProductModal, setAddProductModal] = useState(false);
    const navigate = useNavigate();

    const handleAddProductModal = () => {
        setAddProductModal(true);
    }

    const handleCancelAddProducModal = () => {
        setAddProductModal(false);
    }

    const handleChangeCategory = (event) => {
        const selectedCategory = event.target.value;
        formik.setFieldValue('category', selectedCategory);
        formik.setFieldValue('subCategory', categories[selectedCategory]);
        formik.setFieldValue('selectedSubCategory', '');
    }

    const handleCreateProduct = (productData) => {
        productService.addProduct(productData)
            .then(() => {
                navigate('/admin-add-product');
                toast.success('Продукта е добавен успешно в магазина')
            })
            .catch((error) => {
                console.log(error);
                toast.error('Продукта не е добавен в магазина')
            })
    }

    const initialValues = {
        productName: '',
        productImage: '',
        model: '',
        productPrice: '',
        productNewPrice: '',
        productQuantity: '',
        unitQuantity: '',
        unitWeight: '',
        category: '',
        selectedSubCategory: '',
        subCategory: [],
        description: ''
    }

    const onSubmit = (value, { resetForm }) => {
        handleCreateProduct(value);
        resetForm();
    }

    const validate = (value) => {
        const errors = {};

        if (!value.productName) {
            errors.productName = 'Полето е задължително'
        }

        if (!value.productImage) {
            errors.productImage = 'Полето е задължително'
        } else if (!/^https?:\/\//.test(value.productImage)) {
            errors.productImage = 'URL задължително трябва да започва с http или https'
        }

        if (!value.model) {
            errors.model = 'Полето е задължително'
        }

        if (!value.productPrice) {
            errors.productPrice = 'Полето е задължително'
        }

        if (!value.productQuantity) {
            errors.productQuantity = 'Полето е задължително'
        }

        if (!value.category) {
            errors.category = 'Полето е задължително'
        }

        if (!value.subCategory) {
            errors.subCategory = 'Полето е задължително'
        }

        if (!value.description) {
            errors.description = 'Полето е задължително'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return (

        <div className={styles['admin-panel-products']}>
            <div className={styles.container}>
                <header className={styles['admin-header']}>
                    <h1>Admin Panel</h1>
                </header>
                <nav className={styles['admin-nav']}>
                    <ul>
                        <li><Link to="/admin-add-product">Products</Link></li>
                        <li><Link to="/admin-invetory">Inventory</Link></li>
                        <li><Link to="/admin-orders">Orders</Link></li>
                        <li><Link to="/admin-users">Users</Link></li>
                    </ul>
                </nav>
                <section id="products" className={styles['admin-section-products']}>
                    <h2>Add Product</h2>
                    <button id="addProductBtn" onClick={handleAddProductModal} className={styles['add-product-section-btn']}>Add New Product</button>
                    <div id="productModal" className={`${styles.modal} ${addProductModal ? styles.show : ''}`}>
                        <div className={styles['modal-content']}>
                            <span onClick={handleCancelAddProducModal} className={styles.close}>&times;</span>
                            <h3>Add Product</h3>
                            <form className={styles.productForm} onSubmit={formik.handleSubmit}>
                                <label htmlFor="productName">Product Name:</label>
                                <input
                                    type="text"
                                    id="productName"
                                    name="productName"
                                    value={formik.values.productName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.productName && formik.errors.productName ? <span className={styles['errors-form']}>{formik.errors.productName}</span> : null}
                                <label htmlFor="productImage">Product Image URL:</label>
                                <input
                                    type="text"
                                    id="productImage"
                                    name="productImage"
                                    value={formik.values.productImage}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.productImage && formik.errors ? <span className={styles['errors-form']}>{formik.errors.productImage}</span> : null}
                                <label htmlFor="productName">Model:</label>
                                <input
                                    type="text"
                                    id="model"
                                    name="model"
                                    value={formik.values.model}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.model && formik.errors.model ? <span className={styles['errors-form']}>{formik.errors.model}</span> : null}
                                <label htmlFor="productPrice">Price:</label>
                                <input
                                    type="number"
                                    id="productPrice"
                                    name="productPrice"
                                    step="0.01"
                                    value={formik.values.productPrice}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.productPrice && formik.errors.productPrice ? <span className={styles['errors-form']}>{formik.errors.productPrice}</span> : null}
                                <label htmlFor="productNewPrice">New price:</label>
                                <input
                                    type="number"
                                    id="productNewPrice"
                                    name="productNewPrice"
                                    value={formik.values.productNewPrice}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="productQuantity">Quantity:</label>
                                <input
                                    type="number"
                                    id="productQuantity"
                                    name="productQuantity"
                                    value={formik.values.productQuantity}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.productQuantity && formik.errors.productQuantity ? <span className={styles['errors-form']}>{formik.errors.productQuantity}</span> : null}
                                <label htmlFor="unitQuantity">Unit quantity:</label>
                                <select
                                    className={styles['category-option']}
                                    name="unitQuantity"
                                    value={formik.values.unitQuantity}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="0.5">0.5</option>
                                    <option value="0.555">0.555</option>
                                    <option value="0.7">0.7</option>
                                    <option value="0.75">0.75</option>
                                    <option value="1">1</option>
                                    <option value="1.5">1.5</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="8">8</option>
                                    <option value="10">10</option>
                                    <option value="12">12</option>
                                    <option value="16.5">16.5</option>
                                    <option value="20">20</option>
                                    <option value="25">25</option>
                                    <option value="30">30</option>
                                    <option value="60">60</option>
                                    <option value="70">70</option>
                                    <option value="75">75</option>
                                    <option value="80">80</option>
                                    <option value="85">85</option>
                                    <option value="87">87</option>
                                    <option value="90">90</option>
                                    <option value="100">100</option>
                                    <option value="110">110</option>
                                    <option value="120">120</option>
                                    <option value="125">125</option>
                                    <option value="150">150</option>
                                    <option value="160">160</option>
                                    <option value="180">180</option>
                                    <option value="190">190</option>
                                    <option value="193">193</option>
                                    <option value="198">198</option>
                                    <option value="200">200</option>
                                    <option value="201">201</option>
                                    <option value="220">220</option>
                                    {/* 201 е за масилините */}
                                    <option value="245">245</option>
                                    <option value="250">250</option>
                                    <option value="270">270</option>
                                    <option value="275">275</option>
                                    <option value="280">280</option>
                                    <option value="290">290</option>
                                    <option value="300">300</option>
                                    <option value="325">325</option>
                                    <option value="330">330</option>
                                    <option value="350">350</option>
                                    <option value="360">360</option>
                                    <option value="375">375</option>
                                    <option value="400">400</option>
                                    <option value="420">420</option>
                                    <option value="450">450</option>
                                    <option value="480">480</option>
                                    <option value="500">500</option>
                                    <option value="530">530</option>
                                    <option value="600">600</option>
                                    <option value="700">700</option>
                                    <option value="750">750</option>
                                    <option value="800">800</option>
                                    <option value="900">900</option>
                                    <option value="990">990</option>
                                    <option value="1000">1000</option>
                                    <option value="3190">3190</option>
                                    <option value="4125">4125</option>
                                </select>
                                {formik.touched.unitQuantity && formik.errors.unitQuantity ? <span className={styles['errors-form']}>{formik.errors.unitQuantity}</span> : null}
                                <label htmlFor="unitWeight">Unit weight:</label>
                                <select
                                    className={styles['category-option']}
                                    name="unitWeight"
                                    value={formik.values.unitWeight}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="г">г</option>
                                    <option value="кг">кг</option>
                                    <option value="бр">бр</option>
                                    <option value="мл">мл</option>
                                    <option value="л">л</option>
                                    <option value="връзка">връзка</option>
                                </select>
                                {formik.touched.unitWeight && formik.errors.unitWeight ? <span className={styles['errors-form']}>{formik.errors.unitWeight}</span> : null}
                                <label htmlFor="units-or-kilograms">Units or kilograms</label>
                                <select
                                    className={styles['category-option']}
                                    name="unitsKilogram"
                                    value={formik.values.unitsKilogram}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="Бр">Бр</option>
                                    <option value="Кг">Кг</option>
                                </select>
                                {formik.touched.unitsKilogram && formik.errors.unitsKilogram ? <span className={styles['errors-form']}>{formik.errors.unitsKilogram}</span> : null}
                                <label htmlFor="category-option">Category:</label>
                                <select
                                    className={styles['category-option']}
                                    name="category"
                                    value={formik.values.category}
                                    onChange={handleChangeCategory}
                                >
                                    {Object.keys(categories).map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                                <label htmlFor="subcategory-option">Subcategory:</label>
                                <select
                                    className={styles['subcategory-option']}
                                    name="selectedSubCategory"
                                    value={formik.values.selectedSubCategory}
                                    onChange={formik.handleChange}
                                >
                                    {formik.values.subCategory.map(subCategory => (
                                        <option key={subCategory} value={subCategory}>{subCategory}</option>
                                    ))}
                                </select>
                                <label htmlFor="productDescription">Description:</label>
                                <textarea
                                    id="productDescription"
                                    name="description"
                                    rows="4"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                ></textarea>
                                {formik.touched.description && formik.errors.description ? <span className={styles['errors-form']}>{formik.errors.description}</span> : null}
                                <button className={styles['add-product-btn']} type="submit">Add product</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}