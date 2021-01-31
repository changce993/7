const Products = require('../db/products.json');

module.exports = {
    items: (req,res) => {
        req.session.items += 1;
        res.send({
            items: Products,
            cantidad: Products.length
        });
    },
    itemRandom: (req,res) => {
        req.session.itemRandom += 1;
        const idRandom = Math.floor(Math.random() * (Products.length - 1) + 1);
        const product = Products.find(product => product.id === idRandom);
        res.send(product);
    }
};