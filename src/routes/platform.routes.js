"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var platformController = require("../controllers/platform.controller");
var router = (0, express_1.Router)();
router.route('/')
    .post(platformController.createPlatform)
    .get(platformController.getPlatforms);
router.route('/:id')
    .get(platformController.getPlatformById)
    .put(platformController.updatePlatform)
    .delete(platformController.deletePlatform);
exports.default = router;
