// import React, { useEffect, useState } from "react";
// import styles from './MilkAndEgg.module.css';
// import { Link } from "react-router-dom";
// import PacmanLoader from "react-spinners/PacmanLoader";
// import { GoChevronLeft } from "react-icons/go";
// import { GoChevronRight } from "react-icons/go";

// import * as productService from '../../../services/milkAndEggService';
// import { CardFirstItem } from "./CardFirstItem";
// import { CardSecondItem } from "./CardSecondItem";

// export const MilkAndEgg = ({ showNavigationAndFooter }) => {

//     const [allMilkAndEggProducts, setAllMilkAndEggProducts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [sortBy, setSortBy] = useState('');
//     const [color, setColor] = useState('rgba(239, 133, 53, 1)');
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 20;

//     useEffect(() => {
//         showNavigationAndFooter();
//     }, [showNavigationAndFooter]);

//     useEffect(() => {
//         setLoading(true);
//         productService.getAllMilkAndEggProducts()
//             .then(products => {
//                 // console.log(products)
//                 setAllMilkAndEggProducts(products);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.log(error);
//             })
//     }, []);

//     const handleSortChange = (event) => {
//         setSortBy(event.target.value);
//     }

//     const sortProducts = (products) => {
//         switch (sortBy) {
//             case 'name':
//                 return products.sort((a, b) => a.productName.localeCompare(b.productName));
//             case 'high-price':
//                 return products.sort((a, b) => b.productPrice - a.productPrice);
//             case 'low-price':
//                 return products.sort((a, b) => a.productPrice - b.productPrice);
//             case 'percent':
//                 return products.sort((a, b) => b.productNewPrice - a.productNewPrice);
//             default:
//                 return products.sort((a, b) => b.productQuantity - a.productQuantity);
//         }
//     }

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = sortProducts(allMilkAndEggProducts).slice(indexOfFirstItem, indexOfLastItem);

//     const nextPage = () => {
//         if (currentPage < Math.ceil(allMilkAndEggProducts.length / itemsPerPage)) {
//             setCurrentPage(currentPage + 1);
//         }
//     }

//     const prevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     }

//     const goToPage = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     }

//     const renderPageNumbers = () => {
//         const totalPages = Math.ceil(allMilkAndEggProducts.length / itemsPerPage);
//         const pageNumbers = [];

//         for (let i = 1; i <= totalPages; i++) {
//             pageNumbers.push(
//                 <button
//                     key={i}
//                     onClick={() => goToPage(i)}
//                     className={i === currentPage ? styles.activePage : styles.currentPage}
//                 >
//                     {i}
//                 </button>
//             );
//         }

//         return pageNumbers;
//     }

//     const cssLoader = {
//         display: "block",
//         margin: "270px auto 0 auto",
//     };

//     return (
//         <div className={styles.milkAndEgg}>
//             <div className={styles.container}>
//                 <div className={styles['milkAndEgg-main-content']}>

//                     <div className={styles['mini-nav-product']}>
//                         <Link to="/milks">Пресни млека</Link>
//                         <Link to="/yogurts">Кисели млека</Link>
//                         <Link to="/milkDrinks">Плодови млека, млечни напитки и десерти</Link>
//                         <Link to="/cheeses">Сирена</Link>
//                         <Link to="/yellowCheeses">Кашкавали</Link>
//                         <Link to="/butters">Масло, сметана и извара</Link>
//                         <Link to="/packedSalads">Готови салати</Link>
//                         <Link to="/eggs">Яйца</Link>
//                     </div>

//                     <div className={styles['milkAndEgg-content']}>
//                         <h3 className={styles.sometimes}>Млечни и яйца</h3>
//                         <div className={styles['option-btn']}>
//                             <label htmlFor="">Подреди по:</label>
//                             <select name="option" value={sortBy} onChange={handleSortChange}>
//                                 <option value="name">Име</option>
//                                 <option value="high-price">Най-висока цена</option>
//                                 <option value="low-price">Най-ниска цена</option>
//                                 <option value="percent">% намаление</option>
//                             </select>
//                         </div>
//                         <div className={styles.cards}>

//                             {loading ? (
//                                 <PacmanLoader
//                                     color={color}
//                                     cssOverride={cssLoader}
//                                     size={70}
//                                 />
//                             ) : (
//                                 currentItems.map(product => {
//                                     let cardComponent;
//                                     {
//                                         product.productQuantity === 0 ? (
//                                             cardComponent = <CardSecondItem product={product} />
//                                         ) : (
//                                             cardComponent = <CardFirstItem product={product} />
//                                         )
//                                     }
//                                     return <React.Fragment key={product._id}>{cardComponent}</React.Fragment>
//                                 })
//                             )}
//                         </div>
//                         <div className={styles.pagination}>
//                             <button className={styles.prev} onClick={prevPage} disabled={currentPage === 1}><GoChevronLeft /></button>
//                             {renderPageNumbers()}
//                             <button className={styles.next} onClick={nextPage} disabled={currentPage === Math.ceil(allMilkAndEggProducts.length / itemsPerPage)}><GoChevronRight /></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React from "react";
import * as productService from '../../../services/milkAndEggService';
import { ProductList } from "../ProductList/ProductList";

export const MilkAndEgg = ({ showNavigationAndFooter }) => (
    <ProductList
        showNavigationAndFooter={showNavigationAndFooter}
        fetchProducts={productService.getAllMilkAndEggProducts}
        categoryTitle="Млечни и яйца"
    />
);