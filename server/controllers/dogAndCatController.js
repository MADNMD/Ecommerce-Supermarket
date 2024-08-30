const router = require('express').Router();

const productService = require('../services/productService');

router.get('/get-all-dog-and-cat-products', async (req, res) => {

    try {

        const products = await productService.getAllDogAndCatProducts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllDogAndCatProducts-error-server');
    }
});

router.get('/get-all-dog-foods', async (req, res) => {

    try {

        const products = await productService.getAllDogFoods();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllDogFoods-error-server');
    }
});

router.get('/get-all-cat-foods', async (req, res) => {

    try {

        const product = await productService.getAllCatFoods();

        res.status(200).json(product);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllCatFoods-error-server');
    }
});

router.get('/get-all-treats', async (req, res) => {

    try {

        const products = await productService.getAllTreats();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllTreats-error-server');
    }
});

router.get('/get-all-accessories', async (req, res) => {

    try {

        const products = await productService.getAllAccessories();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllAccessories-error-server');
    }
});

module.exports = router;