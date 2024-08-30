const router = require('express').Router();

const productService = require('../services/productService');

router.get('/get-all-home-and-garden-products', async (req, res) => {

    try {

        const products = await productService.getAllHomeAndGardenProducts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllHomeAndGardenProducts-error-server');
    }

});

router.get('/get-all-laundry-detergents', async (req, res) => {

    try {

        const products = await productService.getAllLaundryDetergents();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllLaundryDetergents-error-server');
    }

});

router.get('/get-all-cleaning-preparations', async (req, res) => {

    try {

        const products = await productService.getAllCleaningPreparations();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllCleaningPreparations-error-server');
    }

});

router.get('/get-all-papers-napkins-foils-envelopes', async (req, res) => {

    try {

        const products = await productService.getAllPapersNapkinsFoilsEnvelopes();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllPapersNapkinsFoilEnvelopes-error-server');
    }

});

router.get('/get-all-cleaning-products', async (req, res) => {

    try {

        const products = await productService.getAllCleaningProducts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllCleaningProducts-error-server');
    }

});

router.get('/get-All-air-fresheners-candles-insecticides', async (req, res) => {

    try {

        const products = await productService.getAllAirFreshenersCandlesInsecticides();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getAllAirFreshenersCandlesInsecticides-error-server');
    }

});

router.get('/get-all-home-and-garden', async (req, res) => {

    try {

        const products = await productService.getAllHomeAndGarden();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
        console.log('getOnlyHomeAndGarden-error-server');
    }

});

module.exports = router;