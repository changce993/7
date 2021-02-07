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
        const { name, price } = req.body;
        const product = {
            id:products.length + 1,
            name,
            price,
            thumbnail: `images/products/${req.file.filename}`,
            ...req.body,
        }
        products.push(product);
        res.send(product);
    },
    deleteProduct: (req,res) => {
        const product = products.find(product => product.id === parseInt(req.params.id));
        products = products.filter(product => parseInt(product.id) !== parseInt(req.params.id));
        res.send(product);
    },
    editProduct: (req,res) => {
        const { name, price, thumbnail } = req.body;
        const product = products.find(product => product.id === parseInt(req.params.id));

        product.name = name;
        product.price = price;
        product.thumbnail = thumbnail;

        res.send(product);
    }
};