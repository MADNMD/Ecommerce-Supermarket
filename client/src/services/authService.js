import * as requester from '../services/requester';

export const register = async (userData) => {

    try {
        const newUser = await requester.post('/users/register', userData);

        return newUser;
    } catch (error) {
        console.log('register-error-client');
        throw error;
    }

}

export const login = async (userData) => {

    try {
        const user = await requester.post('/users/login', userData);

        return user;
    } catch (error) {
        console.log('login-error-client');
        throw error;
    }
}

export const logout = async () => {
    await requester.get('/users/logout');
}