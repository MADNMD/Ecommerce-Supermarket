const router = require('express').Router();

const productService = require('../services/productService');

router.get('/get-all-meat-and-fish', async (req, res) => {

    try {

        const products = await productService.getAllMeatAndFish();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllMeatAndFish-error-server');
    }

});

router.get('/get-all-meat', async (req, res) => {

    try {

        const products = await productService.getAllMeat();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllMeat-error-server');
    }

});

router.get('/get-all-meat-products', async (req, res) => {

    try {

        const products = await productService.getAllMeatProducts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllMeatProducts-error-server');
    }

});

router.get('/get-all-fish', async (req, res) => {

    try {

        const products = await productService.getAllFish();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllFish-error-server');
    }

});

router.get('/get-all-sushi-and-fish-products', async (req, res) => {

    try {

        const products = await productService.getAllSushiAndFishProducts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllSushiAndFishProducts-error-server');
    }

});

module.exports = router;