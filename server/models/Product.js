const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true
    },

    productImage: {
        type: String,
        required: true
    },

    // count: {
    //     type: Number,
    // },

    model: {
        type: String,
        required: true,
    },

    productPrice: {
        type: Number,
        required: true
    },

    productNewPrice: {
        type: Number
    },

    productQuantity: {
        type: Number,
        required: true,
    },

    unitQuantity: {
        type: Number,
        required: true
    },

    unitWeight: {
        type: String,
        required: true
    },

    unitsKilogram: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    selectedSubCategory: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product