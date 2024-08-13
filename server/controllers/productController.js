const router = require('express').Router();

const productService = require('../services/productService');

router.post('/add-product', async (req, res) => {

    try {

        const { productName,
            productImage,
            model,
            // count,
            productPrice,
            productNewPrice,
            productQuantity,
            unitQuantity,
            unitWeight,
            unitsKilogram,
            category,
            selectedSubCategory,
            description } = req.body;

        const addProduct = await productService.addProduct({
            productName,
            productImage,
            model,
            // count,
            productPrice,
            productNewPrice,
            productQuantity,
            unitQuantity,
            unitWeight,
            unitsKilogram,
            category,
            selectedSubCategory,
            description
        });

        res.status(200).json(addProduct)

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('addProduct-error-server');
        console.log(error.message);
    }
});

router.get('/product-details/:productId', async (req, res) => {

    try {

        const productId = req.params.productId;

        const product = await productService.productDetails(productId);

        res.status(200).json(product)

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('product-details-error-server');
    }
});

router.get('/category/:category', async (req, res) => {

    try {

        const category = req.params.category;

        const products = await productService.getProductsByCategory(category);

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('get-products-by-category-error-server');
    }
});

router.get('/subcategory/:subcategory', async (req, res) => {

    try {

        const subcategory = req.params.subcategory;

        const products = await productService.getProductsBySubCategory(subcategory);

        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('get-products-by-subcategory-error-server');
    }
});

router.delete('/delete-product/:productId', async (req, res) => {

    try {

        const productId = req.params.productId;

        await productService.deleteProduct(productId);

        res.status(200).end();

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('delete-product-error-server');
    }
});

router.put('/edit-product/:productId', async (req, res) => {

    try {

        const productId = req.params.productId;
        const updateProductData = req.body;

        const updatedProduct = await productService.editProduct(productId, updateProductData);

        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('product-edited-error-server')
    }
});

router.get('/search', async (req, res) => {

    try {
        const query = req.query.q;

        if (!query) {
            return res.status(400).send('Query is required');
        }

        const products = await productService.searchProducts(query);
        res.status(200).json(products);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
        console.log('search-error-server', error.message);
    }
});
module.exports = router;