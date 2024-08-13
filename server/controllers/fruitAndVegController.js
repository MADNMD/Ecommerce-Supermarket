const router = require('express').Router();

const productService = require('../services/productService');

router.get('/get-all-fruit-and-veg-products', async (req, res) => {

    try {

        const products = await productService.getAllFruitAndVegProducts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllProducts-error-server');
    }
});

router.get('/get-all-fruits', async (req, res) => {

    try {

        const products = await productService.getAllFruits();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllFruits-error-server');
    }
});

router.get('/get-all-vegitables', async (req, res) => {

    try {

        const products = await productService.getAllVegitables();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllVegitables-error-server');
    }
});

router.get('/get-all-salads', async (req, res) => {

    try {

        const products = await productService.getAllSalads();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllSalads-error-server');
    }
});

router.get('/get-all-spices', async (req, res) => {

    try {

        const products = await productService.getAllSpices();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllSpices-error-server');
    }
});

router.get('/get-all-olives', async (req, res) => {

    try {

        const products = await productService.getAllOlives();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllOlives-error-server');
    }
});

router.get('/get-all-drieds', async (req, res) => {

    try {

        const products = await productService.getAllDrieds();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllDrieds-error-server');
    }
});

router.get('/get-all-nuts', async (req, res) => {

    try {

        const products = await productService.getAllNuts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllNuts-error-server');
    }
});

module.exports = router;