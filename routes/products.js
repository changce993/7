const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/items', productsController.items);
router.get('/item-random', productsController.itemRandom);

module.exports = router;