import React, { useContext, useEffect, useRef, useState } from "react";
import styles from './Navigation.module.css';
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext";
import { ProfileContext } from "../../contexts/profileContext";

export const Navigation = () => {

    const { isAuthenticated, admin, email, userId } = useContext(AuthContext);
    const { firstName, lastName, favorites, cart } = useContext(ProfileContext);

    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isProductsVisible, setIsProductsVisible] = useState(false);
    const [cartAllProductPrice, setCartAllProductPrice] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();

    const calculateProductCartPrice = () => {

        const getCartProducts = localStorage.getItem('carts');
        const cartParsed = JSON.parse(getCartProducts);

        const cart = cartParsed[userId] || [];

        let total = 0;

        cart.forEach(product => {
            const productPrice = product.productNewPrice !== null ? product.productNewPrice : product.productPrice;

            const isWeightedProduct = product.unitQuantity >= 100 &&
                (product.selectedSubCategory === 'Зеленчуци' ||
                    product.selectedSubCategory === 'Плодове' ||
                    product.selectedSubCategory === 'Маслини' ||
                    product.selectedSubCategory === 'Месо' ||
                    product.selectedSubCategory === 'Риба') &&
                product.productName !== 'БИО ЧЕРИ ДОМАТИ "Моравско село" 200г';

            const unitPrice = isWeightedProduct ? productPrice * (1000 / product.unitQuantity) : productPrice;

            const productWeight = product.count;

            // Изчисляваме цената за продукта в зависимост от грамажа
            let productTotalPrice = 0;
            if (productWeight >= 100) {
                productTotalPrice = unitPrice * (productWeight / 1000);
            } else {
                productTotalPrice = unitPrice * productWeight;
            }

            total += productTotalPrice;
        });

        return total;

        // return cart?.reduce((total, product) => total + (product.productNewPrice || product.productPrice), 0);
    }

    useEffect(() => {
        setCartAllProductPrice(calculateProductCartPrice());
    }, [cart]);


    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
        setIsProductsVisible(!isProductsVisible);
    }

    const closeNavOnHamburgerMenu = () => {
        setIsNavVisible(false);
        setIsProductsVisible(false);
    }

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        if (event.target.value) {
            navigate(`/search?q=${event.target.value}`);
        }
    }

    return (

        <header className={styles['site-header']}>

            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/"><img src="../images/logo-2.png" alt="" /></Link>
                </div>
                <div className={styles.search}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input
                        type="text"
                        placeholder="Търси"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>
                <nav className={`${styles['site-nav']} ${isNavVisible ? styles.show : ''}`}>
                    <ul>
                        {admin && (
                            <div className={styles['admmin-panel']}>
                                <Link to="/admin-panel">Админ Панел</Link>
                            </div>
                        )}
                        <div className={styles.profile}>

                            {!isAuthenticated && (
                                <Link to="/user/login"><i className='fa-regular fa-user'></i></Link>
                            )}
                            {isAuthenticated && (
                                <Link to="/user/profile"><i className='fa-regular fa-user'></i></Link>
                            )}

                            <div className={styles['profile-tag']}>
                                <p>Профил</p>

                                {!isAuthenticated && (
                                    <div className={styles['profile-reg']}>
                                        <Link to="/user/login">Вход</Link>
                                        <span>/</span>
                                        <Link to="/user/register">Регистрация</Link>
                                    </div>
                                )}

                                {isAuthenticated && (
                                    <div className={styles['profile-reg']}>
                                        <Link to="/user/profile">{firstName ? (
                                            `${firstName} ${lastName}`
                                        ) : (
                                            email
                                        )}</Link>
                                        <span>/</span>
                                        <Link to="/user/logout">Изход</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className={styles.favorites}>
                            <Link to="/user/favorites"><i className='fa-regular fa-heart'></i></Link>
                            <div className={styles['favorites-count']}>
                                <p>Любими</p>
                                {!isAuthenticated ? (
                                    <p>Няма добавени</p>
                                ) : (
                                    <p>{favorites?.length} <span>{favorites?.length === 1 ? 'продукт' : 'продукта'}</span></p>
                                )}
                            </div>
                        </div>
                        <div className={styles.cart}>
                            <Link to="/my-cart"><i className='fa-solid fa-cart-shopping'></i></Link>
                            <div className={styles['price-product']}>
                                {isAuthenticated ? (
                                    <>
                                        <p className={styles.price}>{cartAllProductPrice?.toFixed(2)}лв</p>
                                        <p className={styles.product}>{cart?.length} <span>{cart?.length === 1 ? 'продукт' : 'продукта'}</span></p>
                                    </>
                                ) : (
                                    <>
                                        <p className={styles.price}>0.00лв</p>
                                        <p className={styles.product}>0 продукта</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </ul>
                </nav>
                <div className={`${styles.products} ${isProductsVisible ? styles.show : ''}`}>
                    <Link to="/fruits-and-vegs" onClick={closeNavOnHamburgerMenu}>Зеленчуци и плодове</Link>
                    <Link to="/milks-and-eggs" onClick={closeNavOnHamburgerMenu}>Млечни и яйца</Link>
                    <Link to="/meat-and-fish" onClick={closeNavOnHamburgerMenu}>Месо и риба</Link>
                    <Link to="/bread-and-pasta" onClick={closeNavOnHamburgerMenu}>Хляб и тестени</Link>
                    <Link to="/sweet-and-salty" onClick={closeNavOnHamburgerMenu}>Сладки и солени</Link>
                    <Link to="/drink-water" onClick={closeNavOnHamburgerMenu}>Напитки и вода</Link>
                    <Link to="/baby-and-children-products" onClick={closeNavOnHamburgerMenu}>Бебешки и детски</Link>
                    <Link to="/for-home-and-garden-products" onClick={closeNavOnHamburgerMenu}>За дома и бита</Link>
                    <Link to="/dog-and-cat-products" onClick={closeNavOnHamburgerMenu}>Куче и котка</Link>
                </div>
                <div className={styles['hamburger-menu']} onClick={toggleNav}>
                    <div className={styles['ham-icon']}><i className="fa-solid fa-bars" style={{ display: isNavVisible ? 'none' : 'block' }}></i></div>
                    <div className={styles['ham-close']}><span style={{ display: isNavVisible ? 'block' : 'none' }}>&times;</span></div>
                </div>
            </div>

        </header>
    )
}