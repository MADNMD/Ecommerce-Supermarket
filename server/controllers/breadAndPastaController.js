const router = require('express').Router();

const productService = require('../services/productService');

router.get('/get-all-bread-and-pasta', async (req, res) => {

    try {

        const products = await productService.getAllBreadAndPasta();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllBreadAndPasta-error-server');
    }

});

router.get('/get-all-bread', async (req, res) => {

    try {

        const products = await productService.getAllBread();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllBread-error-server');
    }

});

router.get('/get-all-baguettes-and-tortillas', async (req, res) => {

    try {

        const products = await productService.getAllBaguettesAndTortillas();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllBaguettesAndTortillas-error-server');
    }

});

router.get('/get-all-dough-products', async (req, res) => {

    try {

        const products = await productService.getAllDoughProducts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllDoughProducts-error-server');
    }

});

router.get('/get-all-pasta-products', async (req, res) => {

    try {

        const products = await productService.getAllPastaProducts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllPastaProducts-error-server');
    }

});

router.get('/get-all-fresh-pasta', async (req, res) => {

    try {

        const products = await productService.getAllFreshPasta();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllFreshPasta-error-server');
    }

});

module.exports = router;