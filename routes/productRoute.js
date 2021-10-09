const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController")

router.get("", productController.getAllProducts);
router.post("/create-new-product", productController.createNewProduct);

module.exports = router;