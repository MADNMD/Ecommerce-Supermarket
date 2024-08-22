// import React, { useEffect, useState } from "react";
// import styles from './MeatAndFish.module.css';
// import { Link } from "react-router-dom";
// import PacmanLoader from "react-spinners/PacmanLoader";
// import { GoChevronLeft } from "react-icons/go";
// import { GoChevronRight } from "react-icons/go";
// import { toast } from 'react-toastify';

// import * as productService from '../../../services/meatAndFishService';
// import { CardFirstItem } from "./CardFirstItem";
// import { CardSecondItem } from "./CardSecondItem";
// import { CardThirdItem } from "./CardThirdItem";

// export const MeatAndFish = ({ showNavigationAndFooter }) => {

//     const [allMeatAndFishProducts, setAllMeatAndFishProducts] = useState([]);
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
//         productService.getAllMeatAndFish()
//             .then(products => {
//                 setAllMeatAndFishProducts(products);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 toast.error('Нещо се обърка. Моля опитайте пак');
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
//     const currentItems = sortProducts(allMeatAndFishProducts).slice(indexOfFirstItem, indexOfLastItem);

//     const nextPage = () => {
//         if (currentPage < Math.ceil(allMeatAndFishProducts.length / itemsPerPage)) {
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
//         const totalPages = Math.ceil(allMeatAndFishProducts.length / itemsPerPage);
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
//         <div className={styles.meatAndFish}>
//             <div className={styles.container}>
//                 <div className={styles['meatAndFish-main-content']}>

//                     <div className={styles['mini-nav-product']}>
//                         <Link to="/meat">Месо</Link>
//                         <Link to="/meat-products">Месни продукти</Link>
//                         <Link to="/fish">Риба</Link>
//                         <Link to="/sushi-and-fish-products">Суши и рибни продукти</Link>

//                     </div>

//                     <div className={styles['meatAndFish-content']}>
//                         <h3 className={styles.sometimes}>Месо и риба</h3>
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
//                                         ) : product.unitsKilogram === 'Бр' ? (
//                                             cardComponent = <CardFirstItem product={product} />
//                                         ) : (
//                                             cardComponent = <CardThirdItem product={product} />
//                                         )
//                                     }
//                                     return <React.Fragment key={product._id}>{cardComponent}</React.Fragment>
//                                 })
//                             )}
//                         </div>
//                         <div className={styles.pagination}>
//                             <button className={styles.prev} onClick={prevPage} disabled={currentPage === 1}><GoChevronLeft /></button>
//                             {renderPageNumbers()}
//                             <button className={styles.next} onClick={nextPage} disabled={currentPage === Math.ceil(allMeatAndFishProducts.length / itemsPerPage)}><GoChevronRight /></button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React from "react";
import * as productService from '../../../services/meatAndFishService';
import { ProductList } from "../ProductList/ProductList";

export const MeatAndFish = ({ showNavigationAndFooter }) => (
    <ProductList 
        showNavigationAndFooter={showNavigationAndFooter} 
        fetchProducts={productService.getAllMeatAndFish} 
        categoryTitle="Месо и риба" 
    />
);