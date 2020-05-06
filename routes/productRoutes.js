const express = require("express");
const router = express.Router();
const productController = require("./../controllers/productsController");

router
    .route("/")
    .get(productController.getProducts)
    .post(productController.createProduct)

module.exports = router;