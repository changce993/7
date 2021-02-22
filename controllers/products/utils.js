const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const Products = require('../../db/products.json');
const pathFile = path.join(__dirname, '../../db/products.json');

module.exports = {
    getProduct: productId => Products.find(product => product.id === parseInt(productId)),
    readProducts: () => JSON.parse(readFileSync(pathFile, 'utf8')),
    writeProducts: products => writeFileSync(pathFile, JSON.stringify(products)),
};