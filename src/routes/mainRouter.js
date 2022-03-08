const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

/* Main routes */
router.get('/',mainController.index);

module.exports = router;
