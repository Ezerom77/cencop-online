const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

/* Main routes */
router.get('/',userController.index);

module.exports = router;
