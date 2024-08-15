import React, { useContext, useEffect, useState } from "react";
import styles from './Order.module.css';
import { Link } from "react-router-dom";

import { useAuthContext } from "../../../contexts/authContext";
import * as profileService from '../../../services/profileService';

export const Order = ({ showNavigationAndFooter }) => {

    const { userId } = useAuthContext();
    const [orderDetails, setOrderDetails] = useState({});
    // const [orderProducts, setOrderProducts] = useState([]);

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
            })
    }, [userId]);

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

                        {orderDetails?.orders?.length !== 0
                            ? <table className={styles['order-content-table']}>
                                <thead>
                                    <tr>
                                        <th>Дата</th>
                                        <th>Номер на поръчка</th>
                                        <th>Сума</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderDetails?.orders?.map(orderData => (
                                        <tr key={orderData.orderNumber}>
                                            <td>{orderData.orderDetails.currentDate}</td>
                                            {/* <td><Link to={`/my-order-number`}>{orderData.orderNumber}</Link></td> */}
                                            <td><Link to={`/my-order-number/${orderData.orderNumber}`}>{orderData.orderNumber}</Link></td>
                                            <td>{orderData.orderDetails.totalPrice}лв</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            : <p>Все още нямате направени поръчки!</p>
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}