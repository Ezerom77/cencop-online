const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

/* Main routes */
router.get('/',userController.index);
router.get('/registro',userController.registro);
router.post('/registro',userController.created);

router.get('/pedido',userController.pedido);
router.get('/login',userController.login);
router.post('/login',userController.logedIn);

module.exports = router;
