const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

/* Main routes */
router.get('/',productController.index);

module.exports = router;
