let products = [];

module.exports = {
    getProducts: (req,res) => {
        products.length <= 0
            ? res.json({error: 'No hay productos cargados'})
            : res.send(products);
    },
    getProduct: (req,res) => {
        const product = products.find(product => product.id === parseInt(req.params.id));
        !product ? res.json({error: 'Producto no encontrado'}) : res.send(product);
    },
    addProduct: (req,res) => {
        const { name, price, thumbnail } = req.body;
        const product = {
            id:products.length + 1,
            name,
            price,
            thumbnail,
            ...req.body,
        }
        products.push(product);
        res.send(product);
    }
};