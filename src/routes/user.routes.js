"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userController = require("../controllers/user.controller");
var auth_middleware_1 = require("../middleware/auth.middleware");
var validation_middleware_1 = require("../middleware/validation.middleware");
var joi_1 = require("joi");
var router = (0, express_1.Router)();
var registerSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
    address: joi_1.default.string().required(),
});
var loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
router.post('/register', (0, validation_middleware_1.default)(registerSchema), userController.registerUser);
router.post('/login', (0, validation_middleware_1.default)(loginSchema), userController.loginUser);
router.route('/profile').get(auth_middleware_1.default, userController.getUserProfile).put(auth_middleware_1.default, userController.updateUserProfile);
exports.default = router;
