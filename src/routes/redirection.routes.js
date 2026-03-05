"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var redirectionController = require("../controllers/redirection.controller");
var router = (0, express_1.Router)();
router.route('/')
    .post(redirectionController.createRedirection)
    .get(redirectionController.getRedirections);
router.route('/:id')
    .get(redirectionController.getRedirectionById)
    .put(redirectionController.updateRedirection)
    .delete(redirectionController.deleteRedirection);
exports.default = router;
