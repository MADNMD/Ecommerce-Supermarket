import * as requester from '../services/requester';

export const getAllHomeAndGardenProducts = async () => {

    try {
        const getAllHomeAndGardenProducts = await requester.get('/home-and-garden/get-all-home-and-garden-products');
        return getAllHomeAndGardenProducts;
    } catch (error) {
        console.log('Error get-all-home-and-garden-products service client');
        throw error;
    }
}

export const getAllLaundryDetergents = async () => {

    try {
        const getAllLaundryDetergents = await requester.get('/home-and-garden/get-all-laundry-detergents');
        return getAllLaundryDetergents;
    } catch (error) {
        console.log('Error get-all-laundry-detergents service client');
        throw error;
    }
}

export const getAllCleaningPreparations = async () => {

    try {
        const getAllCleaningPreparations = await requester.get('/home-and-garden/get-all-cleaning-preparations');
        return getAllCleaningPreparations;
    } catch (error) {
        console.log('Error get-all-cleaning-preparations service client');
        throw error;
    }
}

export const getAllPapersNapkinsFoilsEnvelopes = async () => {

    try {
        const getAllPapersNapkinsFoilsEnvelopes = await requester.get('/home-and-garden/get-all-papers-napkins-foils-envelopes');
        return getAllPapersNapkinsFoilsEnvelopes;
    } catch (error) {
        console.log('Error get-all-papers-napkins-foils-envelopes service client');
        throw error;
    }
}

export const getAllCleaningProducts = async () => {

    try {
        const getAllCleaningProducts = await requester.get('/home-and-garden/get-all-cleaning-products');
        return getAllCleaningProducts;
    } catch (error) {
        console.log('Error get-all-cleaning-products service client');
        throw error;
    }
}

export const getAllAirFreshenersCandlesInsecticides = async () => {

    try {
        const getAllAirFreshenersCandlesInsecticides = await requester.get('/home-and-garden/get-all-air-fresheners-candles-insecticides');
        return getAllAirFreshenersCandlesInsecticides;
    } catch (error) {
        console.log('Error get-all-air-fresheners-candles-insecticides service client');
        throw error;
    }
}

export const getAllHomeAndGarden = async () => {

    try {
        const getAllHoneAndGarden = await requester.get('/home-and-garden/get-all-home-and-garden');
        return getAllHoneAndGarden;
    } catch (error) {
        console.log('Error get-All-home-and-garden service client');
        throw error;
    }
}