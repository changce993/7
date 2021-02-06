const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products/products');

router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProduct);
router.post('/', productsController.addProduct);

module.exports = router;