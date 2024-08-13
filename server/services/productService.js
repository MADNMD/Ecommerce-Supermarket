const Product = require('../models/Product');

exports.addProduct = (productData) => Product.create(productData);

exports.productDetails = (productId) => Product.findById(productId);

exports.getProductsByCategory = (category) => Product.find({ category: category }).sort({ productQuantity: -1 });

exports.getProductsBySubCategory = (subcategory) => Product.find({ selectedSubCategory: subcategory }).sort({ productQuantity: -1 });

exports.editProduct = (productId, productData) => Product.updateOne({ _id: productId }, { $set: productData }, { runValidators: true });

exports.deleteProduct = (productId) => Product.findByIdAndDelete(productId);

// FRUIT AND VEGITABLES

exports.getAllFruitAndVegProducts = () => Product.find({ category: 'Зеленчуци и плодове' }).sort({ productQuantity: -1 });

exports.getAllFruits = () => Product.find({ selectedSubCategory: 'Плодове' }).sort({ productQuantity: -1 });

exports.getAllVegitables = () => Product.find({ selectedSubCategory: 'Зеленчуци' }).sort({ productQuantity: -1 });

exports.getAllSalads = () => Product.find({ selectedSubCategory: 'Севжи салати' }).sort({ productQuantity: -1 });

exports.getAllSpices = () => Product.find({ selectedSubCategory: 'Свежи подправки' }).sort({ productQuantity: -1 });

exports.getAllOlives = () => Product.find({ selectedSubCategory: 'Маслини' }).sort({ productQuantity: -1 });

exports.getAllDrieds = () => Product.find({ selectedSubCategory: 'Сушени плодове и зеленчуци' }).sort({ productQuantity: -1 });

exports.getAllNuts = () => Product.find({ selectedSubCategory: 'Ядки и семена' }).sort({ productQuantity: -1 });

// MILK AND EGG

exports.getAllMilkAndEggs = () => Product.find({ category: 'Млечни и яйца' }).sort({ productQuantity: -1 });

exports.getAllMilks = () => Product.find({ selectedSubCategory: 'Пресни млека' }).sort({ productQuantity: -1 });

exports.getAllYogurts = () => Product.find({ selectedSubCategory: 'Кисели млека' }).sort({ productQuantity: -1 });

exports.getAllMilkDrinks = () => Product.find({ selectedSubCategory: 'Плодови млека, млечни напитки и десерти' }).sort({ productQuantity: -1 });

exports.getAllCheeses = () => Product.find({ selectedSubCategory: 'Сирена' }).sort({ productQuantity: -1 });

exports.getAllYellowCheeses = () => Product.find({ selectedSubCategory: 'Кашкавали' }).sort({ productQuantity: -1 });

exports.getAllButters = () => Product.find({ selectedSubCategory: 'Масло, сметана и извара' }).sort({ productQuantity: -1 });

exports.getAllPackedSalads = () => Product.find({ selectedSubCategory: 'Готови салати' }).sort({ productQuantity: -1 });

exports.getAllEggs = () => Product.find({ selectedSubCategory: 'Яйца' }).sort({ productQuantity: -1 });

// MEAT AND FISH

exports.getAllMeatAndFish = () => Product.find({ category: 'Месо и риба' }).sort({ productQuantity: -1 });

exports.getAllMeat = () => Product.find({ selectedSubCategory: 'Месо' }).sort({ productQuantity: -1 });

exports.getAllMeatProducts = () => Product.find({ selectedSubCategory: 'Месни продукти' }).sort({ productQuantity: -1 });

exports.getAllFish = () => Product.find({ selectedSubCategory: 'Риба' }).sort({ productQuantity: -1 });

exports.getAllSushiAndFishProducts = () => Product.find({ selectedSubCategory: 'Суши и рибни продукти' }).sort({ productQuantity: -1 });

// BREAD AND PASTA

exports.getAllBreadAndPasta = () => Product.find({ category: 'Хляб и тестени' }).sort({ productQuantity: -1 });

exports.getAllBread = () => Product.find({ selectedSubCategory: 'Хляб' }).sort({ productQuantity: -1 });

exports.getAllBaguettesAndTortillas = () => Product.find({ selectedSubCategory: 'Багети и тортили' }).sort({ productQuantity: -1 });

exports.getAllDoughProducts = () => Product.find({ selectedSubCategory: 'Тестени изделия' }).sort({ productQuantity: -1 });

exports.getAllPastaProducts = () => Product.find({ selectedSubCategory: 'Макаронени изделия' }).sort({ productQuantity: -1 });

exports.getAllFreshPasta = () => Product.find({ selectedSubCategory: 'Прясна паста' }).sort({ productQuantity: -1 });

exports.searchProducts = (query) => {
    return Product.find({ productName: { $regex: query, $options: 'i' } });
};