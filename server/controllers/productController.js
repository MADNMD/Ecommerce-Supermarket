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

router.put('/update-quantity/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        console.log('ID на продукта:', productId);

        // Стъпка 1: Вземете информация за продукта от базата данни
        const product = await productService.productDetails(productId);
        console.log('Продукт:', product);

        // Стъпка 2: Извлечете количеството от тялото на заявката
        const { productQuantity } = req.body;
        console.log('Получено количество:', productQuantity);

        if (!product) {
            return res.status(404).json({ message: 'Продуктът не е намерен' });
        }

        // Коригирайте изчислението на новото количество
        const newQuantity = product.productQuantity - productQuantity;
        console.log('Новото количество:', newQuantity);

        if (newQuantity < 0) {
            return res.status(400).json({ message: 'Недостатъчна наличност' });
        }

        // Стъпка 3: Актуализирайте количеството на продукта в базата данни
        const updatedProduct = await productService.editProduct(productId, { productQuantity: newQuantity });
        console.log('Актуализиран продукт:', updatedProduct);
        
        // Стъпка 4: Върнете актуализирания продукт
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log('update-product-quantity-error-server', error);
    }
});

module.exports = router;