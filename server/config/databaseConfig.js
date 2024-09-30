const mongoose = require('mongoose');

const { DB_CONNECTION_URL } = require('./env');

exports.initDB = () => {

    mongoose.connection.on('open', () => console.log('Database is conected!'));

    mongoose.connect(DB_CONNECTION_URL);
}