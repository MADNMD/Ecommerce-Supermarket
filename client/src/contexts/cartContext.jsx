import { createContext, useEffect, useState } from "react";

import { useAuthContext } from "./authContext";

export const CartContext = createContext();

export const CartProvider = ({
    children,
}) => {

    const { userId } = useAuthContext();
    const [carts, setCarts] = useState({});
    const [count, setCount] = useState(1);

    // Зареждане на количката от localStorage при първоначално зареждане
    useEffect(() => {

        if (userId) {
            const savedCarts = localStorage.getItem('carts');

            if (savedCarts) {
                setCarts(JSON.parse(savedCarts));
            }
        }
    }, [userId]);

    // Записване на количката в localStorage при промяна
    useEffect(() => {
        if (userId && carts) {
            localStorage.setItem('carts', JSON.stringify(carts));
        }
    }, [userId, carts]);

    // Добавяне на продукт в количката
    const addCart = (product, count) => {
        setCarts(prevCarts => {
            const userCart = prevCarts[userId] || [];
            const productIndex = userCart.findIndex(p => p._id === product._id);

            if (productIndex >= 0) {
                // Ако продуктът вече съществува в кошницата, актуализирай количеството му
                const updatedCart = userCart.map((p, index) =>
                    index === productIndex ? { ...p, count: p.count + count } : p
                );
                return {
                    ...prevCarts,
                    [userId]: updatedCart
                };
            } else {
                // Ако продуктът не съществува, добави го в кошницата
                return {
                    ...prevCarts,
                    [userId]: [...userCart, { ...product, count }]
                };
            }
        });
    };

    // Премахване на продукт от количката
    const removeCart = (productId) => {
        setCarts(prevCarts => {
            const userCart = prevCarts[userId] || [];
            return {
                ...prevCarts,
                [userId]: userCart.filter(product => product._id !== productId)
            };
        });
    }

    // Актуализиране на количката с нови данни
    const updateCart = (updatedCart) => {
        setCarts(prevCarts => ({
            ...prevCarts,
            [userId]: updatedCart
        }));
    }

    // Вземане на количката на текущия потребител
    const getUserCart = () => {
        if (userId) {
            return carts[userId] || [];
        }
    }

    return (
        <CartContext.Provider value={{ addCart, removeCart, updateCart, getUserCart, count }}>
            {children}
        </CartContext.Provider>
    )
}