const { v4: uuidv4 } = require('uuid');

module.exports = {
    getProduct: (req,res) => {
      console.log('ok')
      const cart = {
        id:uuidv4(),
        timstamp: Date.now(),
        product: {
          id:uuidv4(),
          timstamp: Date.now(),
          name: 'name',
          description: 'description',
          code: 312879,
          thumbnail: '',
          price: 199,
          stock: 12
        }
      }
    },
    addProduct: (req,res) => {},
    deleteProduct: (req,res) => {},
};