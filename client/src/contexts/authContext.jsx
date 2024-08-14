import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useLocalStorage } from "../hooks/useLocalStorage";
import * as authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvier = ({
    children,
}) => {

    const [auth, setAuth] = useLocalStorage('userData', {});

    const navigate = useNavigate();

    const onRegisterSubmit = async (userData) => {

        try {
            const newUser = await authService.register(userData);

            setAuth(newUser);

            toast.success('Успешно се регистрирахте във VANIMI');

            navigate('/user/profile');
        } catch (error) {
            toast.error('Този имейл вече и зает');
            console.log(error);
            throw error;
        }
    }

    const onLoginSubmit = async (userData) => {

        try {

            const user = await authService.login(userData);

            setAuth(user);

            toast.success('Успешно влязохте във вашия акаунт');

            navigate('/user/profile');
        } catch (error) {
            toast.error('Грешен имейл или парола');
            console.log(error);
            throw error;
        }
    }

    const onLogout = async () => {

        await authService.logout();

        toast.success('Успешно излязохте от вашия акаунт');

        setAuth({});
    }

    const context = {
        onRegisterSubmit,
        onLoginSubmit,
        onLogout,
        email: auth.email,
        userId: auth._id,

        firstName: auth.firstName,
        lastName: auth.lastName,
        // telefon: auth.telefon,
        // country: auth.country,
        // district: auth.district,
        // city: auth.city,
        // postCode: auth.postCode,
        // address: auth.address,

        admin: auth.admin,
        token: auth.authToken,
        isAuthenticated: !!auth.authToken
    }

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    )

}

export const useAuthContext = () => {

    const context = useContext(AuthContext);
    return context;

}