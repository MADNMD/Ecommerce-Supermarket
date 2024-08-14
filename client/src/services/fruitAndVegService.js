import * as requester from '../services/requester';

export const getAllFruitAndVegProducts = async () => {

    try {
        const getAllFruitAndVegProducts = await requester.get('/fruit-and-veg-products/get-all-fruit-and-veg-products');
        return getAllFruitAndVegProducts;
    } catch (error) {
        console.log('Error get-all-fruit-and-veg-products service client');
        throw error;
    }
};

export const getAllFruits = async () => {

    try {
        const getAllFruits = await requester.get('/fruit-and-veg-products/get-all-fruits');
        return getAllFruits
    } catch (error) {
        console.log('Error get-all-fruits service client');
        throw error;
    }
};

export const getAllVegitables = async () => {

    try {
        const getAllVegitables = await requester.get('/fruit-and-veg-products/get-all-vegitables');
        return getAllVegitables;
    } catch (error) {
        console.log('Error get-all-vegitables service client');
        throw error;
    }
};

export const getAllSalads = async () => {

    try {
        const getAllSalads = await requester.get('/fruit-and-veg-products/get-all-salads');
        return getAllSalads;
    } catch (error) {
        console.log('Error get-all-salads service client');
        throw error;
    }
};

export const getAllSpices = async () => {

    try {
        const getAllSpices = await requester.get('/fruit-and-veg-products/get-all-spices');
        return getAllSpices;
    } catch (error) {
        console.log('Error get-all-spices service client');
        throw error;
    }
};

export const getAllOlives = async () => {

    try {
        const getAllOlives = await requester.get('/fruit-and-veg-products/get-all-olives');
        return getAllOlives;
    } catch (error) {
        console.log('Error get-all-olives service client');
        throw error;
    }
};

export const getAllDrieds = async () => {

    try {
        const getAllDrieds = await requester.get('/fruit-and-veg-products/get-all-drieds');
        return getAllDrieds;
    } catch (error) {
        console.log('Error get-all-direds service client');
        throw error;
    }
};

export const getAllNuts = async () => {

    try {
        const getAllNuts = await requester.get('/fruit-and-veg-products/get-all-nuts');
        return getAllNuts;
    } catch (error) {
        console.log('Error get-all-nuts service client');
        throw error;
    }
}