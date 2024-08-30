import * as requester from './requester';

export const getAllDogAndCatProducts = async () => {

    try {
        const getAllDogAndCatProducts = await requester.get('/dog-and-cat/get-all-dog-and-cat-products');
        return getAllDogAndCatProducts;
    } catch (error) {
        console.log('Error get all dog and cat products service client');
        throw error;
    }
};

export const getAllDogFoods = async () => {

    try {
        const getAllDogFoods = await requester.get('/dog-and-cat/get-all-dog-foods');
        return getAllDogFoods;
    } catch (error) {
        console.log('Error get all dog foods service client');
        throw error;
    }
};

export const getAllCatFoods = async () => {

    try {
        const getAllCatFoods = await requester.get('/dog-and-cat/get-all-cat-foods');
        return getAllCatFoods;
    } catch (error) {
        console.log('Error get all cat foods service client');
        throw error;
    }
};

export const getAllTreats = async () => {

    try {
        const getAllTreats = await requester.get('/dog-and-cat/get-all-treats');
        return getAllTreats;
    } catch (error) {
        console.log('Error get all treats service client');
        throw error;
    }
};

export const getAllAccessories = async () => {

    try {
        const getAllAccessories = await requester.get('/dog-and-cat/get-all-accessories');
        return getAllAccessories;
    } catch (error) {
        console.log('Error get all accessories service client');
        throw error;
    }
}