import * as requester from '../services/requester';

export const getAllBreadAndPasta = async () => {

    try {
        const getAllBreadAndPasta = await requester.get('/bread-and-pasta-products/get-all-bread-and-pasta');
        return getAllBreadAndPasta;
    } catch (error) {
        console.log('Error get-all-bread-and-pasta service client');
        throw error;
    }
};

export const getAllBreads = async () => {

    try {
        const getAllBreads = await requester.get('/bread-and-pasta-products/get-all-bread');
        return getAllBreads;
    } catch (error) {
        console.log('Error get-all-bread service client');
        throw error;
    }
};

export const getAllBaguettesAndTortillas = async () => {

    try {
        const getAllBaguettesAndTortillas = await requester.get('/bread-and-pasta-products/get-all-baguettes-and-tortillas');
        return getAllBaguettesAndTortillas;
    } catch (error) {
        console.log('Error get-all-baguettes-and-tortillas service client');
        throw error;
    }
};

export const getAllPastaProducts = async () => {

    try {
        const getAllPastaProducts = await requester.get('/bread-and-pasta-products/get-all-pasta-products');
        return getAllPastaProducts;
    } catch (error) {
        console.log('Error get-all-pasta-products service client');
        throw error;
    }
};

export const getAllDoughProducts = async () => {

    try {
        const getAllDoughProducts = await requester.get('/bread-and-pasta-products/get-all-dough-products');
        return getAllDoughProducts;
    } catch (error) {
        console.log('Error get-all-dough-products service client');
        throw error;
    }
};

export const getAllFreshPasta = async () => {

    try {
        const getAllFreshPasta = await requester.get('/bread-and-pasta-products//get-all-fresh-pasta');
        return getAllFreshPasta;
    } catch (error) {
        console.log('Error get all fresh pasta service client');
        throw error;
    }
};