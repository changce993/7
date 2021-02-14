const express = require('express');
const app = express();
const products = require('./products');
const views = require('./views');

app.use('/products', products);
app.use('/views', views);

module.exports = app;