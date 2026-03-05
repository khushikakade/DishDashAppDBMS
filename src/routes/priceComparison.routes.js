"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var priceComparisonController = require("../controllers/priceComparison.controller");
var router = (0, express_1.Router)();
router.route('/')
    .post(priceComparisonController.createPriceComparison)
    .get(priceComparisonController.getPriceComparisons);
router.route('/:id')
    .get(priceComparisonController.getPriceComparisonById)
    .put(priceComparisonController.updatePriceComparison)
    .delete(priceComparisonController.deletePriceComparison);
router.route('/compare')
    .post(priceComparisonController.compareProductPrices);
exports.default = router;
