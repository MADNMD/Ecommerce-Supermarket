const router = require('express').Router();

const productService = require('../services/productService');

router.get('/get-all-milk-and-egg-products', async (req, res) => {

    try {

        const products = await productService.getAllMilkAndEggs();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllMilkAndEgg-error-server');
    }
});

router.get('/get-all-milk', async (req, res) => {

    try {

        const products = await productService.getAllMilks();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllMilk-error-server');
    }
});

router.get('/get-all-yogurts', async (req, res) => {

    try {

        const products = await productService.getAllYogurts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllYogurs-error-server');
    }
});

router.get('/get-all-milk-drink', async (req, res) => {

    try {

        const products = await productService.getAllMilkDrinks();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllMilkDrink-error-server')
    }
});

router.get('/get-all-cheese', async (req, res) => {

    try {

        const products = await productService.getAllCheeses();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllCheese-error-server');
    }
});

router.get('/get-all-yellow-cheese', async (req, res) => {

    try {

        const products = await productService.getAllYellowCheeses();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllYellowCheese-error-server');
    }
});

router.get('/get-all-butter', async (req, res) => {

    try {

        const products = await productService.getAllButters();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllButter-error-server');
    }
});

router.get('/get-all-packed-salad', async (req, res) => {

    try {

        const products = await productService.getAllPackedSalads();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllBPackedSalad-error-server');
    }
});

router.get('/get-all-egg', async (req, res) => {

    try {

        const products = await productService.getAllEggs();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllBPEgg-error-server')
    }
})

module.exports = router;