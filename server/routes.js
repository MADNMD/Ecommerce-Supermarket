const router = require('express').Router();

const userController = require('./controllers/userController');
const emailController = require('./controllers/emailController');
const productController = require('./controllers/productController');
const fruitAndVegController = require('./controllers/fruitAndVegController');
const getAllMilkAndEggController = require('./controllers/milkAndEggController');
const meatAndFishController = require('./controllers/meatAndFishController');
const breadAndPastaController = require('./controllers/breadAndPastaController');

router.use('/users', userController);
router.use('/email', emailController);
router.use('/products', productController);
router.use('/fruit-and-veg-products', fruitAndVegController);
router.use('/milk-and-egg-products', getAllMilkAndEggController);
router.use('/meat-and-fish-products', meatAndFishController);
router.use('/bread-and-pasta-products', breadAndPastaController);

module.exports = router;