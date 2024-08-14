const router = require('express').Router();

const productService = require('../services/productService');

router.get('/get-all-drinks-and-water', async (req, res) => {

    try {

        const products = await productService.getAllDrinksAndWater();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllDrinksAndWater-error-server');
    }

});

router.get('/get-all-coffee-and-tea', async (req, res) => {

    try {

        const products = await productService.getAllCoffeeAndTea();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllCoffeeAndTea-error-server');
    }

});

router.get('/get-all-water', async (req, res) => {

    try {

        const products = await productService.getAllwater();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllWater-error-server');
    }

});

router.get('/get-all-fresh-and-smoothie', async (req, res) => {

    try {

        const product = await productService.getAllFreshAndSmoothie();

        res.status(200).json(product);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllFreshAndSmoothie-error-server');
    }

});

router.get('/get-all-soft-drinks', async (req, res) => {

    try {

        const products = await productService.getAllSoftDrinks();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllSoftDrinks-error-server');
    }

});

router.get('/get-all-energy-drinks', async (req, res) => {

    try {

        const products = await productService.getAllEnergyDrinks();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllEnergyDrinks-error-server');
    }

});

router.get('/get-all-cider-and-kombucha', async (req, res) => {

    try {

        const products = await productService.getAllCiderAndKombucha();
        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllCiderAndKombucha-error-server');
    }

});

router.get('/get-all-beers', async (req, res) => {

    try {

        const products = await productService.getAllBeers();
        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllBeers-error-server');
    }

});

router.get('/get-all-wines', async (req, res) => {

    try {

        const products = await productService.getAllWines();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllWines-error-server');
    }

});

router.get('/get-all-alkohol-drinks', async (req, res) => {

    try {

        const products = await productService.getAllAlkoholDrinks();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllAlkoholDrinks-error-server');
    }

});

module.exports = router;