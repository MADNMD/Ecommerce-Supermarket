import * as requester from '../services/requester';

export const getUser = async (userId) => {

    try {
        const profile = await requester.get(`/users/get-user/${userId}`);
        return profile;
    } catch (error) {
        console.log('Error profile service client');
        throw error;
    }
};

export const editUser = async (userId, profileData) => {

    try {
        const editProfile = await requester.put(`/users/edit/${userId}`, profileData);
        return editProfile;
    } catch (error) {
        console.log('Error edit profile service client');
        throw error;
    }
};

export const getALlUsers = async () => {

    try {
        const allUsers = await requester.get('/users/get-all-users');
        return allUsers;
    } catch (error) {
        console.log('Error profile service client');
        throw error;
    }
}

export const searchUser = async (query) => {

    try {
        const searchUser = await requester.get(`/users/search-user?q=${encodeURIComponent(query)}`);
        return searchUser
    } catch (error) {
        console.log('Error search profile service client');
        throw error;
    }
}