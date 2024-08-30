import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { CartContext } from '../../../contexts/cartContext';

export const OrderGuards = () => {

    const { getUserCart } = useContext(CartContext);
    const userCart = getUserCart();
    console.log(userCart)
    if (userCart.length === 0) {
        return <Navigate to={'/'} />
    }

    return <Outlet />
}