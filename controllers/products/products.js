const { getProduct, readProducts, writeProducts } = require('./utils');
const products = readProducts();

module.exports = {
    getProducts: (req,res) => res.render('products', {products}),
    getProduct: (req,res) => !product ? res.json({error: 'Producto no encontrado'}) : res.send(getProduct(req.params.id)),
    addProduct: (req,res) => {
        const { name, price } = req.body;
        const product = {
            id:products.length + 1,
            name,
            price,
            baseurl:'http://localhost:8080/',
            thumbnail: `images/products/${req.file.filename}`,
            ...req.body,
        }
        products.push(product);
        writeProducts(products);
        res.render('products', {products});
    },
    deleteProduct: (req,res) => {
        const product = getProduct(req.params.id);
        writeProducts(products.filter(product => parseInt(product.id) !== parseInt(req.params.id)))
        res.send(product);
    },
    editProduct: (req,res) => {
        const { name, price, thumbnail } = req.body;
        const product = getProduct(req.params.id);
        console.log(product)

        product.name = name;
        product.price = price;
        product.thumbnail = thumbnail;

        res.send(product);
    }
};