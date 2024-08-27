const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/:categoryname/products', productsController.getProducts);
router.get('/:categoryname/products/:productid', productsController.getProductById);

module.exports = router;
