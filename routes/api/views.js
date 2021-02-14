const express = require('express');
const router = express.Router();
const viewsController = require('../../controllers/viewsController');

router.get('/', viewsController.views);

module.exports = router;