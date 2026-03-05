"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate = function (schema) { return function (req, res, next) {
    var error = schema.validate(req.body).error;
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}; };
exports.default = validate;
