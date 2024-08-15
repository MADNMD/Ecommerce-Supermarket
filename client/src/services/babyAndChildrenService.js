import * as requester from '../services/requester';

export const getAllBabyAndChildrenProducts = async () => {

    try {
        const getAllBabyAndChildrenProducts = await requester.get('/baby-and-children/get-all-baby-and-child-products');
        return getAllBabyAndChildrenProducts;
    } catch (error) {
        console.log('Error get-all-baby-and-child-products service client');
        throw error;
    }
}

export const getAllBabyFoods = async () => {

    try {
        const getAllBabyFoods = await requester.get('/baby-and-children/get-all-baby-foods');
        return getAllBabyFoods;
    } catch (error) {
        console.log('Error get-all-baby-foods service client');
        throw error;
    }
}

export const getAllBabyDrinks = async () => {

    try {
        const getAllBabyDrinks = await requester.get('/baby-and-children/get-all-baby-drinks');
        return getAllBabyDrinks;
    } catch (error) {
        console.log('Error get-all-baby-drinks service client');
        throw error;
    }
}

export const getAllBabyCosmetics = async () => {

    try {
        const getAllBabyCosmetics = await requester.get('/baby-and-children/get-all-baby-cosmetics');
        return getAllBabyCosmetics;
    } catch (error) {
        console.log('Error get-all-baby-cosmetics service client');
        throw error;
    }
}

export const getAllDiapersAndWetWipes = async () => {

    try {
        const getAllDiapersAndWetWipes = await requester.get('/baby-and-children/get-all-diapers-and-wet-wipes');
        return getAllDiapersAndWetWipes;
    } catch (error) {
        console.log('Error get-all-diapers-and-wet-wipes service client');
        throw error;
    }
}

export const getAllDetergentsAndFabricSofteners = async () => {

    try {
        const getAllDetergentsAndFabricSofteners = await requester.get('/baby-and-children/get-all-detergents-and-fabric-softeners');
        return getAllDetergentsAndFabricSofteners;
    } catch (error) {
        console.log('Error get-all-detergents-and-fabric-softeners service client');
        throw error;
    }
}