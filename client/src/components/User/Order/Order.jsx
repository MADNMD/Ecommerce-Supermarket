import React, { useEffect, useState } from "react";
import styles from './Order.module.css';
import { Link } from "react-router-dom";
import { GoChevronLeft, GoChevronRight } from "react-icons/go"; // Icons for pagination
import { useAuthContext } from "../../../contexts/authContext";
import * as profileService from '../../../services/profileService';

export const Order = ({ showNavigationAndFooter }) => {
    const { userId } = useAuthContext();
    const [orderDetails, setOrderDetails] = useState({ orders: [] }); // Initialize orders as empty array
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    useEffect(() => {
        profileService.getUser(userId)
            .then(orderData => {
                const reversedOrders = [...orderData.orders].reverse();
                setOrderDetails({ orders: reversedOrders });
            })
            .catch(error => {
                console.log(error);
            });
    }, [userId]);

    // Проверяваме дали има поръчки
    const orders = orderDetails.orders || []; // Защита срещу undefined

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem); // Използваме поръчките, ако има

    const nextPage = () => {
        if (currentPage < Math.ceil(orders.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const totalPages = Math.ceil(orders.length / itemsPerPage);
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    className={i === currentPage ? styles.activePage : styles.currentPage}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div className={styles.order}>
            <div className={styles.container}>
                <div className={styles['order-main-content']}>
                    <div className={styles['mini-nav']}>
                        <Link to="/user/order">Моите поръчки</Link>
                        <Link to="/user/favorites">Любими продукти</Link>
                        <Link to="/user/profile">Моите данни</Link>
                        <Link to="/user/logout">Изход</Link>
                    </div>

                    <div className={styles['order-content']}>
                        <h3>Моите поръчки</h3>

                        {orders.length !== 0 ? (
                            <>
                                <table className={styles['order-content-table']}>
                                    <thead>
                                        <tr>
                                            <th>Дата</th>
                                            <th>Номер на поръчка</th>
                                            <th>Сума</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentOrders.map(orderData => (
                                            <tr key={orderData.orderNumber}>
                                                <td>{orderData.orderDetails.currentDate}</td>
                                                <td>
                                                    <Link to={`/my-order-number/${orderData.orderNumber}`}>
                                                        {orderData.orderNumber}
                                                    </Link>
                                                </td>
                                                <td>{orderData.orderDetails.totalPrice}лв</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className={styles.pagination}>
                                    <button className={styles.prev} onClick={prevPage} disabled={currentPage === 1}>
                                        <GoChevronLeft />
                                    </button>
                                    {renderPageNumbers()}
                                    <button className={styles.next} onClick={nextPage} disabled={currentPage === Math.ceil(orders.length / itemsPerPage)}>
                                        <GoChevronRight />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <p>Все още нямате направени поръчки!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
