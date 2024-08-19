import React, { useEffect, useState } from "react";
import styles from './AdminOrders.module.css';
import { Link } from "react-router-dom";
import moment from 'moment';

import * as profileService from '../../../services/profileService';
import { useAuthContext } from "../../../contexts/authContext";

export const AdminOrders = ({ showNavigationAndFooter }) => {

    // const { userId } = useAuthContext();
    // const [user, setUser] = useState({});
    // const [allUsers, setAllUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [sortOption, setSortOption] = useState('date');
    const [allOrders, setAllOrders] = useState([]);
    const [sortedOrders, setSortedOrders] = useState([]);

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    useEffect(() => {
        profileService.getALlUsers()
            .then(users => {
                const orders = users.flatMap(user =>
                    user.orders.map(order => ({ ...order, user }))
                );
                // console.log('All Orders:', orders);
                setAllOrders(orders);
                sortOrders(orders, sortOption);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        sortOrders(allOrders, sortOption);
    }, [sortOption, allOrders]);

    const sortOrders = (orders, option) => {
        let sorted = [...orders];
        if (option === 'date') {
            sorted.sort((a, b) => moment(b.orderDetails.currentDate, "DD.MM.YYYY").toDate() - moment(a.orderDetails.currentDate, "DD.MM.YYYY").toDate());
        } else if (option === 'sum') {
            sorted.sort((a, b) => b.orderDetails.totalPrice - a.orderDetails.totalPrice);
        }
        setSortedOrders(sorted);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleUseClick = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    }

    const closeModal = () => {
        setSelectedUser(null);
        setShowModal(false);
    }

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

                <section id="products" className={styles['section-order-users']}>
                    <h2>Orders</h2>

                    <div className={styles['orders-content']}>
                        <form className={styles['orders-form']}>

                            <label htmlFor="subcategory-option-orders">Sort by:</label>
                            <select
                                className={styles['subcategory-option-orders']}
                                name="subcategory-option-orders"
                                onChange={handleSortChange}
                                value={sortOption}
                            >
                                <option value="date">Date</option>
                                <option value="sum">Sum</option>
                            </select>
                        </form>
                    </div>
                    <table className={styles['admin-orders']}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Date of Delivery</th>
                                <th>Order number</th>
                                <th>Client ID</th>
                                <th>Sum</th>
                            </tr>
                        </thead>
                        <tbody id="productTableBody-orders" className={styles['product-table-body-orders']}>
                            {sortedOrders.map(order => (
                                    <tr key={order._id}>
                                        <td>{order.orderDetails.currentDate}</td>
                                        <td>{order.orderDetails.deliveryDetails.day}</td>
                                        <td><Link to={`/my-order-number/${order.orderNumber}`}>{order.orderNumber}</Link></td>
                                        <td><Link to="" onClick={() => handleUseClick(order.user)}>{order.user._id}</Link></td>
                                        <td>{order.orderDetails.totalPrice}лв</td>
                                    </tr>
                            ))}
                        </tbody>
                    </table>

                    {showModal && selectedUser && (
                        <div id="client-productModal" className={styles['client-modal']}>
                            <div className={styles['client-modal-content']}>
                                <span onClick={() => closeModal()} className={styles['client-close']}>&times;</span>
                                <h3>Client Info</h3>
                                <p>First name: <span>{selectedUser.firstName}</span></p>
                                <p>Last name: <span>{selectedUser.lastName}</span></p>
                                <p>Email: <span>{selectedUser.email}</span></p>
                                <p>Telefon: <span>{selectedUser.telefon}</span></p>
                                <p>City: <span>{selectedUser.city}</span></p>
                                <p>Address: <span>{selectedUser.address}</span></p>
                            </div>
                        </div>
                    )}

                </section>
            </div>
        </div>
    )
}