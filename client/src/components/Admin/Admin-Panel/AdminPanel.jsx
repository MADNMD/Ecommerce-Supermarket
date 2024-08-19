import React, { useEffect } from "react";
import styles from './AdminPanel.module.css';
import { Link } from "react-router-dom";

export const AdminPanel = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    return (

        <div className={styles['admin-panel']}>
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


            </div>
        </div>
    )
}