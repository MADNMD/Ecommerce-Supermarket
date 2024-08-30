import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/authContext';

export const AuthGuards = () => {

    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={'/user/login'} />
    }

    return <Outlet />
}