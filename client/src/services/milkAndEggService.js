import * as requester from '../services/requester';

export const getAllMilkAndEggProducts = async () => {

    try {
        const getAllMilkAndEggProducts = await requester.get('/milk-and-egg-products/get-all-milk-and-egg-products');
        return getAllMilkAndEggProducts;
    } catch (error) {
        console.log('Error get-all-milkd-and-egg-products service client');
        throw error;
    }
};

export const getAllMilk = async () => {

    try {
        const getAllMilk = await requester.get('/milk-and-egg-products/get-all-milk');
        return getAllMilk;
    } catch (error) {
        console.log('Error get-all-milk-products service client');
        throw error;
    }
};

export const getAllYogurts = async () => {

    try {
        const getAllYogurts = await requester.get('/milk-and-egg-products/get-all-yogurts');
        return getAllYogurts
    } catch (error) {
        console.log('Error get-all-yogurts-products service client');
        throw error;
    }
};

export const getAllMilkDrink = async () => {

    try {
        const getAllMilkDrink = await requester.get('/milk-and-egg-products/get-all-milk-drink');
        return getAllMilkDrink;
    } catch (error) {
        console.log('Error get-all-milk-drink-products service client');
        throw error;
    }
};

export const getAllCheese = async () => {

    try {
        const getAllCheese = await requester.get('/milk-and-egg-products/get-all-cheese');
        return getAllCheese;
    } catch (error) {
        console.log('Error get-all-cheese-products service client');
        throw error;
    }
};

export const getAllYellowCheese = async () => {

    try {
        const getAllYellowCheese = await requester.get('/milk-and-egg-products/get-all-yellow-cheese');
        return getAllYellowCheese;
    } catch (error) {
        console.log('Error get-all-yellow-cheese-products service client');
        throw error;
    }
};

export const getAllButter = async () => {

    try {
        const getAllButter = await requester.get('/milk-and-egg-products/get-all-butter');
        return getAllButter;
    } catch (error) {
        console.log('Error get-all-butter-products service client');
        throw error;
    }
};

export const getAllPackedSalad = async () => {

    try {
        const getAllPackedSalad = await requester.get('/milk-and-egg-products/get-all-packed-salad');
        return getAllPackedSalad;
    } catch (error) {
        console.log('Error get-all-packed-salad-products service client');
        throw error;
    }
};

export const getAllEgg = async () => {

    try {
        const getAllEgg = await requester.get('/milk-and-egg-products/get-all-egg');
        return getAllEgg;
    } catch (error) {
        console.log('Error get-all-egg-products service client');
        throw error;
    }
}