const router = require('express').Router();

const productService = require('../services/productService');

router.get('/get-all-sweet-and-salty', async (req, res) => {

    try {

        const products = await productService.getAllSweetAndSalty();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllSweetAndSalty-error-server');
    }

});

router.get('/get-all-sugar-products', async (req, res) => {

    try {

        const products = await productService.getAllSugarProducts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllSugarProducts-error-server');
    }

});

router.get('/get-all-breakfast-cereals-cornflakes-and-muesli', async (req, res) => {

    try {

        const products = await productService.getAllBreakfastCerealsCornflakesAndMuselies();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllBreakfastCerealsCornflakesAndMuesli-error-server');
    }

});

router.get('/get-all-salty-products', async (req, res) => {

    try {

        const products = await productService.getAllSaltyProducts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllSaltyProducts-error-server');
    }

});

router.get('/get-all-chips-and-snacks', async (req, res) => {

    try {

        const products = await productService.getAllChipsAndSnacks();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllChipsAndSnacks-error-server');
    }

});

module.exports = router;