const express = require('express');
const app = express();
const products = require('./products');
const views = require('./views');
const cart = require('./cart');

app.use('/products', products);
app.use('/views', views);
app.use('/cart', cart);

module.exports = app;