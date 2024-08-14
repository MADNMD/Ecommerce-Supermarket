import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

import * as profileService from '../services/profileService';
import { useAuthContext } from "./authContext";

export const ProfileContext = createContext();

export const ProfileProvider = ({
    children,
}) => {

    const [profile, setProfile] = useState({});

    const { userId } = useAuthContext();

    useEffect(() => {
        if (userId) {

            profileService.getUser(userId)
                .then(profileData => {
                    setProfile(profileData);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [userId]);

    const handleEditProfile = async (profileData) => {

        const oldFavoritesLength = profile.favorites.length;
        const oldCartLenght = profile.cart.length;

        try {

            await profileService.editUser(userId, profileData);

            const updatedProfile = await profileService.getUser(userId);
            setProfile(updatedProfile);

            const newFavoritesLength = updatedProfile.favorites.length;
            const newCartLength = updatedProfile.cart.length;

            if (newFavoritesLength > oldFavoritesLength) {
                toast.success('Продукта успешно е добавен в любими');
            } else if (newFavoritesLength < oldFavoritesLength) {
                toast.success('Продукта успешно е премахнат от любими');
            } else if (newCartLength > oldCartLenght) {
                toast.success('Продукта успешно е добавен в кошницата за пазаруване');
            } else if(newCartLength < oldCartLenght) {
                toast.success('Продукта успешно е премахнат от кошницата за пазаруване');
            } else {
                toast.success('Профилът е обновен успешно')
            }

        } catch (error) {
            console.log(error);
            toast.error('Възникна грешка при обновяване на профила')
            throw error;
        }
    }

    const profileContext = {
        handleEditProfile,
        userId: profile._id,
        firstName: profile.firstName,
        lastName: profile.lastName,
        email: profile.email,
        telefon: profile.telefon,
        country: profile.country,
        city: profile.city,
        postCode: profile.postCode,
        address: profile.address,

        favorites: profile.favorites,
        cart: profile.cart,
        
        orders: profile.orders
    }

    return (
        <>
            <ProfileContext.Provider value={profileContext}>
                {children}
            </ProfileContext.Provider>
        </>
    )
}

export const userProfileContext = () => {
    const profileContext = useContext(ProfileContext);
    return profileContext;
}