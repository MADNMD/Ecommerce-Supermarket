import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { CartContext } from '../../../contexts/cartContext';
import { useAuthContext } from '../../../contexts/authContext';

export const OrderGuards = () => {

    const { getUserCart } = useContext(CartContext);
    const userCart = getUserCart();
    const { admin } = useAuthContext();

    if (userCart.length === 0 && !admin) {
        return <Navigate to={'/'} />;
    }

    return <Outlet />;


    // if (userCart.length === 0) {
    //     return <Navigate to={'/'} />
    // } else if (admin) {
    //     return <Outlet />
    // }
    // return <Outlet />
}