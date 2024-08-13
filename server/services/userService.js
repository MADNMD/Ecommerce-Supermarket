const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { SECRET } = require('../config/env');

exports.register = async (email, password) => {

    const userData = {
        email,
        password
    }

    return User.create(userData);
};

exports.login = async (email, password) => {

    try {

        const user = await User.findOne({ email });
        if (!user) {
            throw {
                message: 'Invalid email or password'
            }
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
            throw {
                message: 'Invalid email or password'
            }
        }

        return user
    } catch (error) {
        console.log('Error during login:', error);
        throw error;
    }
};

exports.createToken = (user) => {

    const payload = {
        _id: user._id,
        email: user.email,
        admin: user.admin
    };

    const option = { expiresIn: '1d' };

    const tokenPromise = new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, option, (err, decodedToken) => {
            if (err) {
                return reject(err);
            }
            resolve(decodedToken);
        });
    });

    return tokenPromise;
};

// exports.getUser = (userId) => User.findById(userId).populate('favorites').populate('cart');
exports.getUser = (userId) => User.findById(userId).populate('favorites').populate('cart').populate({ path: 'orders.products', model: 'Product' });

exports.editUser = (userId, userData) => {

    return User.updateOne({ _id: userId }, { $set: userData }, { runValidators: true });

};

exports.addFavoriteProduct = async (userId, productId) => {

    try {

        const user = await User.findById(userId);

        if (!user) {
            return null;
        }

        // if (user.favorites.includes(productId)) {
        //     alert('Този продукт вече е добавен');
        // }

        if (!user.favorites.includes(productId)) {
            user.favorites.push(productId);
            await user.save();
        }

        return user;
    } catch (error) {
        console.error('Error adding favorite product:', error);
        throw error;
    }
};
exports.getAllUsers = async () => {
    return User.find().populate({ path: 'orders.products', model: 'Product' });
};

exports.searchUsers = (query) => {
    return User.find({
        $or: [
            { email: { $regex: query, $options: 'i' } },
            { firstName: { $regex: query, $options: 'i' } },
            { lastName: { $regex: query, $options: 'i' } },
            { telefon: { $regex: query, $options: 'i' } }
        ]
    });
}