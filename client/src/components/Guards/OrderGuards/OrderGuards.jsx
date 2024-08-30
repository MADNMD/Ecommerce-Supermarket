import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { CartContext } from '../../../contexts/cartContext';
import { useAuthContext } from '../../../contexts/authContext';

export const OrderGuards = () => {

    const { getUserCart } = useContext(CartContext);
    const userCart = getUserCart();
    const { admin } = useAuthContext();

    if (admin || userCart.length === 0) {
        return <Outlet />
    }

    return <Navigate to={'/'} />
}