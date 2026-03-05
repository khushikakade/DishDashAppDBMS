"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var restaurantController = require("../controllers/restaurant.controller");
var auth_middleware_1 = require("../middleware/auth.middleware");
var validation_middleware_1 = require("../middleware/validation.middleware");
var joi_1 = require("joi");
var router = (0, express_1.Router)();
var restaurantSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    address: joi_1.default.string().required(),
    cuisine: joi_1.default.string().required(),
});
var menuItemSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    category: joi_1.default.string().required(),
});
router.route('/')
    .get(restaurantController.getRestaurants)
    .post(auth_middleware_1.default, (0, validation_middleware_1.default)(restaurantSchema), restaurantController.createRestaurant);
router.route('/:id')
    .get(restaurantController.getRestaurantById)
    .put(auth_middleware_1.default, (0, validation_middleware_1.default)(restaurantSchema), restaurantController.updateRestaurant)
    .delete(auth_middleware_1.default, restaurantController.deleteRestaurant);
router.route('/:id/menu')
    .post(auth_middleware_1.default, (0, validation_middleware_1.default)(menuItemSchema), restaurantController.addMenuItem);
router.route('/:id/menu/:itemId')
    .put(auth_middleware_1.default, (0, validation_middleware_1.default)(menuItemSchema), restaurantController.updateMenuItem)
    .delete(auth_middleware_1.default, restaurantController.deleteMenuItem);
exports.default = router;
