"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productController = require("../controllers/product.controller");
var router = (0, express_1.Router)();
router.route('/')
    .post(productController.createProduct)
    .get(productController.getProducts);
router.post('/search', productController.searchProduct);
router.route('/:id')
    .get(productController.getProductById)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);
exports.default = router;
