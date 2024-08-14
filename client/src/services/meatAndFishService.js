import * as requester from '../services/requester';

export const getAllMeatAndFish = async () => {

    try {
        const getAllMeatAndFish = await requester.get('/meat-and-fish-products/get-all-meat-and-fish');
        return getAllMeatAndFish;
    } catch (error) {
        console.log('Error get-all-meat-and-fish service client');
        throw error;
    }
};

export const getAllMeat = async () => {

    try {
        const getAllMeat = await requester.get('/meat-and-fish-products/get-all-meat');
        return getAllMeat;
    } catch (error) {
        console.log('Error get-all-meat service client');
        throw error;
    }
};

export const getAllMeatProducts = async () => {

    try {
        const getAllMeatProducts = await requester.get('/meat-and-fish-products/get-all-meat-products');
        return getAllMeatProducts;
    } catch (error) {
        console.log('Error get-all-meat-products service client');
        throw error;
    }

};

export const getAllFish = async () => {

    try {
        const getAllFish = await requester.get('/meat-and-fish-products/get-all-fish');
        return getAllFish;
    } catch (error) {
        console.log('Error get-all-fish service client');
        throw error;
    }

};

export const getAllSushiAndFishProducts = async () => {

    try {
        const getAllSushiAndFishProducts = await requester.get('/meat-and-fish-products/get-all-sushi-and-fish-products');
        return getAllSushiAndFishProducts;
    } catch (error) {
        console.log('Error get-all-sushi-and-fish-products service client');
        throw error;
    }

}