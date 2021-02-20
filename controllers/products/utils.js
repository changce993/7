const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const Products = require('../../db/products.json');
const pathFile = path.join(__dirname, '../../db/products.json');

module.exports = {
    getProduct: productId => Products.find(product => product.id === parseInt(productId)),
    readProducts: async () => {
        try {
            await JSON.parse(readFileSync(pathFile, {encoding: 'utf8'}))
        } catch (error) {
            console.log('err', error);
        }
    },
    writeProducts: products => writeFileSync(pathFile, JSON.stringify(products)),
};