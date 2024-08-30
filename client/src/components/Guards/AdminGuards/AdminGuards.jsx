import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/authContext';

export const AdminGuards = () => {

    const { admin } = useAuthContext();

    if(!admin) {
        return <Navigate to={'*'} />
    }

    return <Outlet />
}