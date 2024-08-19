import React, { useEffect, useState } from "react";
import styles from './AdminUsers.module.css';
import { Link, useNavigate } from "react-router-dom";
import moment from 'moment';
import { toast } from "react-toastify";

import * as profileService from '../../../services/profileService';

export const AdminUsers = ({ showNavigationAndFooter }) => {

    useEffect(() => {
        showNavigationAndFooter();
    }, [showNavigationAndFooter]);

    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        profileService.getALlUsers()
            .then(users => {
                setUsers(users);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSearchUser = async (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    
        if (query) {
            try {
                const foundUsers = await profileService.searchUser(query);
                setUsers(foundUsers);
            } catch (error) {
                toast.error('Нещо се обърка опитай отново!');
                console.log('Error while searching users:', error);
            }
        } else {
            // Ако търсенето е изчистено, може да върнем всички потребители
            const allUsers = await profileService.getALlUsers();
            setUsers(allUsers);
        }
    };

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

                <section id="products" className={styles['admin-section-users']}>
                    <h2>Users</h2>

                    <div className={styles['users-content']}>
                        <form action="" className={styles['users-form']}>
                            <label htmlFor="subcategory-option-users">Search by:</label>
                            <input 
                            type="text" 
                            className={styles['search-user']} 
                            value={searchQuery}
                            onChange={handleSearchUser}
                            />
                        </form>
                    </div>
                    <table className={styles['admin-users']}>
                        <thead>
                            <tr>
                                <th>Date of Registration</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Telefon</th>
                            </tr>
                        </thead>
                        <tbody id="productTableBody-users" className={styles['product-table-bodu-users']}>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{moment(user.createdAt).format('DD.MM.YYYY')}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.telefon}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </section>

            </div>
        </div>
    )

}