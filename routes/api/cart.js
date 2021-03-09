const express = require('express');
const router = express.Router();
const user = require('../../middlewares/user');
const cartController = require('../../controllers/cart/cart');

router.get('/:id', user.admin, cartController.getProduct);
router.post('/:id', cartController.addProduct);
router.delete('/:id', cartController.deleteProduct);

module.exports = router;