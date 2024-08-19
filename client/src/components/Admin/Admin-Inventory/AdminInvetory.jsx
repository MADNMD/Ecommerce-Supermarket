import React, { useEffect, useState } from "react";
import styles from './AdminInvetory.module.css';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { getProductsByCategory, getProductsBySubCategory } from "../../../services/productService";
import { DeleteModal } from "./DeleteModal";
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

export const AdminInvetory = ({ showNavigationAndFooter }) => {

    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [isDelete, setIsDelete] = useState(false);
    const [productId, setProductId] = useState('');
    const [editModal, setEditModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    const handleChangeCategory = async (event) => {
        const selectedCategory = event.target.value;
        setSelectedCategory(selectedCategory);
        formik.setFieldValue('category', selectedCategory);
        formik.setFieldValue('subCategory', categories[selectedCategory]);
        formik.setFieldValue('selectedSubCategory', '');

        try {

            const productsByCategory = await getProductsByCategory(selectedCategory);

            setProducts(productsByCategory);

        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeSubCategory = async (event) => {
        const selectedSubCategory = event.target.value;
        setSelectedSubCategory(selectedSubCategory);
        formik.setFieldValue('selectedSubCategory', selectedSubCategory);

        try {
            const productsBySubCategory = await getProductsBySubCategory(selectedSubCategory);

            setProducts(productsBySubCategory);

        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeSort = (event) => {
        setSortBy(event.target.value);
    }

    const sortProducts = (products) => {

        switch (sortBy) {
            case 'name':
                return products.sort((a, b) => a.productName.localeCompare(b.productName));
            case 'model':
                return products.sort((a, b) => a.model.localeCompare(b.model));
            case 'priceHight':
                return products.sort((a, b) => b.productPrice - a.productPrice);
            case 'priceLow':
                return products.sort((a, b) => a.productPrice - b.productPrice);
            case 'quantity':
                return products.sort((a, b) => a.productQuantity - b.productQuantity);
            default:
                return products;
        }
    }

    const handleShowEdit = (productId) => {
        setEditModal(true);
        setProductId(productId);

        productService.productDetails(productId)
            .then(productData => {
                formik.setValues({
                    productName: productData.productName || '',
                    productImage: productData.productImage || '',
                    model: productData.model || '',
                    productPrice: productData.productPrice || '',
                    productNewPrice: productData.productNewPrice || '',
                    productQuantity: productData.productQuantity || '',
                    unitQuantity: productData.unitQuantity || '',
                    unitWeight: productData.unitWeight || '',
                    unitsKilogram: productData.unitsKilogram || '',
                    category: productData.category || '',
                    selectedSubCategory: productData.selectedSubCategory || '',
                    description: productData.description || ''
                });
                formik.setFieldValue('subCategory', categories[productData.category] || []);
            })
    }

    const handleCancelEdit = () => {
        setEditModal(false);
    }

    // const handleEdit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         await productService.editProduct(productId, formik.values);
    //         toast.success('Продуктът е редактиран успешно!');
    //         setEditModal(false);

    //         const updatedProducts = products.map(product => (
    //             product._id === productId ? { ...product, ...formik.values } : product
    //         ));
    //         setProducts(updatedProducts);

    //     } catch (error) {
    //         toast.error('Неуспешно редактиране на продукта!');
    //         console.log(error);
    //     }
    // }

    const handleDelete = (productId) => {
        setIsDelete(true);
        setProductId(productId);
    }

    const handleCancelDelete = () => {
        setIsDelete(false);
    }

    const confirmDeleteProfile = () => {

        try {
            productService.deleteProduct(productId);

            setProducts(products.filter(p => p._id !== productId));

            setIsDelete(false);

            toast.success('Продукта е изтрит успешно от магазина')

        } catch (error) {
            console.log(error);
            toast.error(`Нещо се обърка и продукта не е изтрит от магазина`)
        }
    }

    const initialValues = {
        // category: '',
        // selectedSubCategory: '',
        // subCategory: [],
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

    const onSubmit = async (value) => {
        try {
            await productService.editProduct(productId, value);
            toast.success('Продуктът е редактиран успешно!');
            setEditModal(false);

            const updatedProducts = products.map(product => (
                product._id === productId ? { ...product, ...value } : product
            ));
            setProducts(updatedProducts);

        } catch (error) {
            toast.error('Неуспешно редактиране на продукта!');
            console.log(error);
        }
    }

    const validate = (value) => {
        const errors = {};

        if (!value.productName) {
            errors.productName = 'Полето е задължително';
        }

        if (!value.productImage) {
            errors.productImage = 'Полето е задължително';
        } else if (!/^https?:\/\//.test(value.productImage)) {
            errors.productImage = 'URL задължително трябва да започва с http или https';
        }

        if (!value.model) {
            errors.model = 'Полето е задължително';
        }

        if (!value.productPrice) {
            errors.productPrice = 'Полето е задължително';
        } else if (value.productPrice <= 0) {
            errors.productPrice = 'Невалидна цена';
        }

        if (!value.productQuantity) {
            errors.productQuantity = 'Полето е задължително';
        } else if (value.productQuantity < 0) {
            errors.productQuantity = 'Невалидно количество';
        }

        if(!value.unitQuantity){
            errors.unitQuantity = 'Полето е задължително';
        }

        if (!value.category) {
            errors.category = 'Полето е задължително';
        }

        if (!value.subCategory) {
            errors.subCategory = 'Полето е задължително';
        }

        if (!value.description) {
            errors.description = 'Полето е задължително';
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

                    <section id="products" className={styles['section-invetory-products']}>
                        <h2>Inventory</h2>

                        <div className={styles['inventory-content']}>
                            <form onSubmit={formik.handleSubmit} className={styles['inventory-form']}>
                                <label htmlFor="category-option-inventory">Category:</label>
                                <select
                                    className={styles['category-option-inventory']}
                                    name="category"
                                    value={formik.values.category}
                                    onChange={handleChangeCategory}
                                >
                                    {Object.keys(categories).map(category => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                                <label htmlFor="subcategory-option-inventory">Subcategory:</label>
                                <select
                                    className={styles['subcategory-option-inventory']}
                                    name="selectedSubCategory"
                                    value={formik.values.selectedSubCategory}
                                    onChange={handleChangeSubCategory}
                                >
                                    {formik.values.subCategory?.map(subCategory => {
                                        return <option key={subCategory} value={subCategory}>{subCategory}</option>
                                    })}
                                </select>
                                <label htmlFor="subcategory-option-sort">Sort by:</label>
                                <select value={sortBy} onChange={handleChangeSort} className={styles['subcategory-option-sort']} name="subcategory-option-sort">
                                    <option value="name">Name</option>
                                    <option value="model">Model</option>
                                    <option value="priceHight">Price Hight</option>
                                    <option value="priceLow">Price Low</option>
                                    <option value="quantity">Quantity</option>
                                </select>
                            </form>
                        </div>
                        <table className={styles['admin-inventory']}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>New Price</th>
                                    <th>Quantity</th>
                                    <th>Category</th>
                                    <th>Subcategory</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody id="productTableBody" className={styles['product-table-body-invetory']}>

                                {sortProducts(products).map(product => (
                                    product?._id && (
                                        <tr key={product._id}>
                                            <td>{product._id}</td>
                                            <td>{product.productName}</td>
                                            <td><img src={product.productImage} alt={product.productName} /></td>
                                            <td>{product.model}</td>
                                            <td>{product.productPrice?.toFixed(2)}лв</td>
                                            <td>{product.productNewPrice ? `${product.productNewPrice?.toFixed(2)}лв` : ''}</td>
                                            <td style={{ backgroundColor: product.productQuantity === 0 ? 'red' : 'transparent' }}>{product.unitsKilogram === 'Бр' ? `${product.productQuantity}бр` : `${product.productQuantity}кг`}</td>
                                            <td>{product.category}</td>
                                            <td>{product.selectedSubCategory}</td>
                                            <td>
                                                <Link onClick={() => handleShowEdit(product._id)}>Edit</Link>
                                                <Link onClick={() => handleDelete(product._id)}>Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                ))}
                            </tbody>
                        </table>

                        <div id="edit-productModal" className={`${styles['edit-modal']} ${editModal ? styles.show : ''}`}>
                            <div className={styles['edit-modal-content']}>
                                <span onClick={handleCancelEdit} className={styles['edit-close']}>&times;</span>
                                <h3>Edit Product</h3>

                                <form onSubmit={formik.handleSubmit} className={styles['edit-productForm']}>
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
                                    {formik.touched.productImage && formik.errors.productImage ? <span className={styles['errors-form']}>{formik.errors.productImage}</span> : null}
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
                                    <label htmlFor="productNewPrice">New Price:</label>
                                    <input
                                        type="number"
                                        id="productNewPrice"
                                        name="productNewPrice"
                                        step="0.01"
                                        value={formik.values.productNewPrice}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.productNewPrice && formik.errors.productNewPrice ? <span className={styles['errors-form']}>{formik.errors.productNewPrice}</span> : null}
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
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="6">6</option>
                                        <option value="10">10</option>
                                        <option value="12">12</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                        <option value="30">30</option>
                                        <option value="70">70</option>
                                        <option value="80">80</option>
                                        <option value="90">90</option>
                                        <option value="100">100</option>
                                        <option value="100">100</option>
                                        <option value="110">110</option>
                                        <option value="120">120</option>
                                        <option value="125">125</option>
                                        <option value="150">150</option>
                                        <option value="160">160</option>
                                        <option value="180">180</option>
                                        <option value="200">200</option>
                                        <option value="201">201</option>
                                        <option value="220">220</option>
                                        {/* 201 е за масилините */}
                                        <option value="250">250</option>
                                        <option value="270">270</option>
                                        <option value="300">300</option>
                                        <option value="400">400</option>
                                        <option value="420">420</option>
                                        <option value="480">480</option>
                                        <option value="500">500</option>
                                        <option value="600">600</option>
                                        <option value="700">700</option>
                                        <option value="800">800</option>
                                        <option value="900">900</option>
                                        <option value="1000">1000</option>
                                        <option value="3190">3190</option>
                                        <option value="4125">4125</option>
                                    </select>

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

                                    <label htmlFor="category-option">Category:</label>
                                    <select
                                        className={styles['category-option']}
                                        name="category"
                                        value={formik.values.category}
                                        onChange={formik.handleChange}
                                    >
                                        {Object.keys(categories).map(category => (
                                            <option key={category} value={category}>
                                                {category}
                                            </option>
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
                                            <option key={subCategory} value={subCategory}>
                                                {subCategory}
                                            </option>
                                        ))}
                                    </select>

                                    <label htmlFor="productDescription">Description:</label>
                                    <textarea
                                        id="productDescription"
                                        rows="4"
                                        name="description"
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    ></textarea>
                                    {formik.touched.description && formik.errors.description ? <span className={styles['errors-form']}>{formik.errors.description}</span> : null}
                                    <button className={styles['edit-product-btn']} type="submit">Edit product</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {isDelete
                ? <DeleteModal isConfirm={confirmDeleteProfile} isCancel={handleCancelDelete} />
                : null
            }
        </>
    )

}