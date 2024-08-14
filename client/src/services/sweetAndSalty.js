import * as requester from './requester';

export const getAllSweetAndSalty = async () => {

    try {
        const getAllSweetAndSalty = await requester.get('/sweet-and-salty/get-all-sweet-and-salty');
        return getAllSweetAndSalty;
    } catch (error) {
        console.log('Error get all sweet and salty service client');
        throw error;
    }

};

export const getAllSugarProducts = async () => {

    try {
        const getAllSugarProducts = await requester.get('/sweet-and-salty/get-all-sugar-products');
        return getAllSugarProducts;
    } catch (error) {
        console.log('Error get all sugar products service client');
        throw error;
    }

}

export const getAllBreakfastCerealsCornflakesAndMuesli = async () => {

    try {
        const getAllBreakfastCerealsCornflakesAndMuesli = await requester.get('/sweet-and-salty/get-all-breakfast-cereals-cornflakes-and-muesli');
        return getAllBreakfastCerealsCornflakesAndMuesli;
    } catch (error) {
        console.log('Error get all breakfast cereals cornflakes and muesli service client');
        throw error;
    }

};

export const getAllSaltyProducts = async () => {

    try {
        const getAllSaltyProducts = await requester.get('/sweet-and-salty/get-all-salty-products');
        return getAllSaltyProducts;
    } catch (error) {
        console.log('Error get all salty products service client');
        throw error;
    }

};

export const getAllChipsAndSnacks = async () => {

    try {
        const getAllChipsAndSnacks = await requester.get('/sweet-and-salty/get-all-chips-and-snacks');
        return getAllChipsAndSnacks;
    } catch (error) {
        console.log('Error get all chips and snacks service client');
        throw error;
    }

};