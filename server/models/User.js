const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { SALT_ROUNDS } = require('../config/env');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: true,
        match: [/^[a-zA-Z0-9.,!-_]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/, 'Invalid email']
    },

    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [3, 'Password should be at least 3 charachters!'],
    },

    firstName: {
        type: String,
        // required: [true, 'Firstname is required'],
        minLegth: [3, 'Firstname should be at least 3 characters!'],
        maxLength: [20, 'Firstname must be no more than 15 characters!'],
        default: ''
    },

    lastName: {
        type: String,
        // required: [true, 'Lastname is required'],
        minLegth: [3, 'Lastname should be at least 3 characters!'],
        maxLength: [20, 'Lastname must be no more than 15 characters!'],
        default: ''
    },

    telefon: {
        type: String,
        // required: [true, 'Telefon is required!'],
        default: ''
    },

    country: {
        type: String,
        // required: [true, 'Country is required!'],
        default: ''
    },

    district: {
        type: String,
        default: ''
    },

    city: {
        type: String,
        // required: [true, 'City is required!'],
        default: ''
    },

    postCode: {
        type: String,
        // required: [true, 'Post Code is required!'],
        default: ''
    },

    address: {
        type: String,
        // required: [true, 'Address is required!'],
        default: ''
    },

    admin: {
        type: Boolean,
        enum: ['true', 'false'],
        default: false
    },

    favorites: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }],

    cart: [{
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }],

    // orders: [{
    //     orderNumber: {
    //         type: String,
    //         required: true
    //     },
    //     orderDetails: {
    //         type: Object,
    //         required: true,
    //     }
    // }]

    orders: [{
        orderNumber: {
            type: String,
            required: true
        },
        products: [{
            type: mongoose.Types.ObjectId,
            ref: 'Product'
        }],
        orderDetails: {
            type: Object,
            required: true,
        }
    }]

}, { timestamps: true });

userSchema.pre('save', async function () {

    if (this.isModified('password')) { // помага да се избегне повторно хеширане на паролата, когато дабавям продукт в любими
        const hash = await bcrypt.hash(this.password, SALT_ROUNDS);
        this.password = hash;
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;