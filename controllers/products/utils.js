module.exports = {
    getProduct: (products, productId) => {
        return products.find(product => product.id === parseInt(productId));
    }
}