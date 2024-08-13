const express = require('express');

function exporessConfig(app) {

    app.use(express.json());

    app.use(express.urlencoded({ extended: false }));

    app.use(express.static('static'));
}

module.exports = exporessConfig;