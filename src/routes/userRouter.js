const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
/* Main routes */
router.get('/',authMiddleware, userController.index);
router.get('/registro',guestMiddleware,userController.registro);
router.post('/registro',userController.created);

router.get('/pedido',authMiddleware, userController.pedido);
router.get('/login',guestMiddleware,userController.login);
router.post('/login',userController.logedIn);
router.get('/logout',userController.logout);

module.exports = router;
