import React, { useEffect, useState } from "react";
import styles from './MyOrderNumber.module.css';

// import { useAuthContext } from "../../../contexts/authContext";
import * as profileService from '../../../services/profileService';
import { useParams } from "react-router-dom";

export const MyOrderNumber = ({ hideNavigationAndFooter }) => {

    // const { userId } = useAuthContext();
    const orderId = useParams();
    const [orderDetails, setOrderDetails] = useState({});
    
    useEffect(() => {
        hideNavigationAndFooter();
    }, [hideNavigationAndFooter]);

    useEffect(() => {
        profileService.getALlUsers()
            .then(users => {
                let order;
                users.forEach(user => {
                    user.orders.forEach(o => {
                        if (o.orderNumber === orderId.orderNumber) {
                            order = o;
                        }
                    });
                });
                if (order) {
                    // console.log('Order Details:', order);
                    setOrderDetails(order);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, [orderId.orderNumber]);

    // useEffect(() => {
    //     profileService.getUser(userId)
    //         .then(orderData => {
    //             const order = orderData.orders.find(order => order.orderNumber === orderId.orderNumber);
    //             // console.log(order)
    //             if (order) {
    //                 setOrderDetails(order);
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, [userId]);
    
    return (

        <div className={styles['site-myCart']}>

            <div className={styles['myCart-logo']}>
                <a href="/"><img src="../images/logo-2.png" alt="" /></a>
            </div>
            <div className={styles.container}>
                <div className={styles['myCart-product-order-number']}>
                    <h3>Поръчка номер <span>{orderDetails.orderNumber}</span></h3>

                    <table className={styles['myCart-table-order-number']}>

                        <thead>
                            <tr>
                                <th>Продукт</th>
                                <th>Количество</th>
                                <th>Цена</th>
                                <th>Сума</th>
                            </tr>
                        </thead>
                        <tbody>

                            {orderDetails.products?.map(order => (
                                <tr key={order._id}>
                                    <td>
                                        <div className={styles['myCart-table-order-number-img-content']}>
                                            <img src={order.productImage} alt={order.model} />
                                            {order.productName}
                                        </div>
                                    </td>
                                    {orderDetails.orderDetails.deliveryDetails.countDetails.map(info => {
                                        if (order._id === info.id) {

                                            if (info.count === 201) {
                                                info.count = 200;
                                            }
                                            const countValue = info.count >= 100 ? info.count / 1000 : info.count;
                                            const countValueFormatted = countValue < 1 ? countValue.toFixed(3) : countValue;

                                            return (
                                                <React.Fragment key={info.id}>
                                                    <td>{countValueFormatted}</td>
                                                    <td>{order.productPrice.toFixed(2)}лв</td>
                                                    <td>{info.price}лв</td>
                                                </React.Fragment>
                                            );
                                        }
                                    })}

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={styles['myCar-order-number-total-sum']}>
                        <p>Междинна сума: <span>{orderDetails.orderDetails?.totalPrice}лв</span></p>
                        <p>ОБЩО: <span>{orderDetails.orderDetails?.totalPrice}лв</span></p>
                    </div>
                </div>
                <div className={styles['delivery-all-price-order-number']}>
                    <h6>Данни за поръчката</h6>
                    <div className={styles['order-number-content']}>
                        <p>Номер на поръчката</p>
                        <p>{orderDetails.orderNumber}</p>
                        <p>Дата на поръчката</p>
                        <p>{orderDetails.orderDetails?.currentDate}</p>
                        <p>Начин на плащане</p>
                        <p>{orderDetails.orderDetails?.deliveryDetails.paymentMethod}</p>
                    </div>

                    <h6>Доставка</h6>
                    <div className={styles['order-number-content-2']}>
                        <p>Лице за контакт</p>
                        <p>{orderDetails.orderDetails?.firstName} {orderDetails.orderDetails?.lastName}</p>
                        <p>Адрес за доставка</p>
                        <p>{orderDetails.orderDetails?.deliveryDetails.city} {orderDetails.orderDetails?.deliveryDetails.hood} {orderDetails.orderDetails?.deliveryDetails.address}</p>
                        <p>За доставка на:</p>
                        <p>{orderDetails.orderDetails?.deliveryDetails.day}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}