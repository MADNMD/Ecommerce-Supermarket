const router = require('express').Router();

const productService = require('../services/productService');

router.get('/get-all-baby-and-child-products', async (req, res) => {

    try {

        const products = await productService.getAllBabyAndChildrenProducts();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllBabyAndChildrenProducts-error-server');
    }

});

router.get('/get-all-baby-foods', async (req, res) => {

    try {

        const products = await productService.getAllBabyFoods();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllBabyFoods-error-server');
    }

});

router.get('/get-all-baby-drinks', async (req, res) => {

    try {

        const products = await productService.getAllBabyDrinks();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllBabyDrinks-error-server');
    }

});

router.get('/get-all-baby-cosmetics', async (req, res) => {

    try {

        const products = await productService.getAllBabyCosmetics();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllBabyCosmetics-error-server');
    }

});

router.get('/get-all-diapers-and-wet-wipes', async (req, res) => {

    try {

        const products = await productService.getAllDiapersAndWetWipes();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllDiapersAndWetWipes-error-server');
    }

});

router.get('/get-all-detergents-and-fabric-softeners', async (req, res) => {

    try {

        const products = await productService.getAllDetergentsAndFabricSofteners();

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('getAllDetergentsAndFabricSofteners-error-server');
    }

});

module.exports = router;