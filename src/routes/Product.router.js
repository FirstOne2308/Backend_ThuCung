const express = require("express");
const router = express.Router()
const ProductController = require('../controllers/Product.controller');

router.post("/create", ProductController.uploadFields, ProductController.createProduct);
router.patch('/update/:id', ProductController.updateProduct)

module.exports = router