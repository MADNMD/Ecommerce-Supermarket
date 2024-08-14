import * as requester from './requester';

export const getAllDrinksAndWater = async () => {

    try {
        const getAllDrinksAndWater = await requester.get('/drink-and-water/get-all-drinks-and-water');
        return getAllDrinksAndWater;
    } catch (error) {
        console.log('Error get all drinks and water service client');
        throw error;
    }

};

export const getAllCoffeeAndTea = async () => {

    try {
        const getAllCoffeeAndTea = await requester.get('/drink-and-water/get-all-coffee-and-tea');
        return getAllCoffeeAndTea;
    } catch (error) {
        console.log('Error get all coffee and tea service client');
        throw error;
    }

}

export const getAllWater = async () => {

    try {
        const getAllWater = await requester.get('/drink-and-water/get-all-water');
        return getAllWater;
    } catch (error) {
        console.log('Error get all water service client');
        throw error;
    }

}

export const getAllFreshAndSmoothie = async () => {

    try {
        const getAllFreshAndSmoothie = await requester.get('/drink-and-water/get-all-fresh-and-smoothie');
        return getAllFreshAndSmoothie;
    } catch (error) {
        console.log('Error get all fresh and smoothie service client');
        throw error;
    }

}

export const getAllSoftDrinks = async () => {

    try {
        const getAllSoftDrinks = await requester.get('/drink-and-water/get-all-soft-drinks');
        return getAllSoftDrinks;
    } catch (error) {
        console.log('Error get all soft drinks service client');
        throw error;
    }

}

export const getAllEnergyDrinks = async () => {

    try {
        const getAllEnergyDrinks = await requester.get('/drink-and-water/get-all-energy-drinks');
        return getAllEnergyDrinks;
    } catch (error) {
        console.log('Error get all energy drinks service client');
        throw error;
    }

}

export const getAllCiderAndKombucha = async () => {

    try {
        const getAllCiderAndKombucha = await requester.get('/drink-and-water/get-all-cider-and-kombucha');
        return getAllCiderAndKombucha;
    } catch (error) {
        console.log('Error get all cider and kombucha service client');
        throw error;
    }

}

export const getAllBeers = async () => {

    try {
        const getAllBeers = await requester.get('/drink-and-water/get-all-beers');
        return getAllBeers;
    } catch (error) {
        console.log('Error get all beers service client');
        throw error;
    }

}

export const getAllWines = async () => {

    try {
        const getAllWines = await requester.get('/drink-and-water/get-all-wines');
        return getAllWines;
    } catch (error) {
        console.log('Error get all wines service client');
        throw error;
    }

}

export const getAllAlkoholDrinks = async () => {

    try {
        const getAllAlkoholDrinks = await requester.get('/drink-and-water/get-all-alkohol-drinks');
        return getAllAlkoholDrinks;
    } catch (error) {
        console.log('Error get all alkohol drinks service client');
        throw error;
    }

}