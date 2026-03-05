"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var orderController = require("../controllers/order.controller");
var auth_middleware_1 = require("../middleware/auth.middleware");
var validation_middleware_1 = require("../middleware/validation.middleware");
var joi_1 = require("joi");
var router = (0, express_1.Router)();
var orderItemSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    quantity: joi_1.default.number().required(),
    price: joi_1.default.number().required(),
});
var orderSchema = joi_1.default.object({
    restaurant: joi_1.default.string().required(),
    items: joi_1.default.array().items(orderItemSchema).required(),
    totalPrice: joi_1.default.number().required(),
});
router.route('/')
    .get(auth_middleware_1.default, orderController.getOrders)
    .post(auth_middleware_1.default, (0, validation_middleware_1.default)(orderSchema), orderController.createOrder);
router.route('/:id')
    .get(auth_middleware_1.default, orderController.getOrderById);
router.route('/:id/status')
    .put(auth_middleware_1.default, orderController.updateOrderStatus);
exports.default = router;
