const express = require('express');
const multer = require('multer');
const adminController = require('../controllers/admin');
const router = express.Router();

router.get('/getProducts', adminController.getPagProducts)

router.get('/product/:id', adminController.getDetailProduct);

router.put('/product/:id', adminController.putProduct);

router.delete('/product/:id', adminController.deleteProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

module.exports = router;


