"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var Price_1 = require("./Price");
var setupAssociations = function () {
    Product_1.default.hasMany(Price_1.default, {
        foreignKey: 'productId',
        as: 'prices',
    });
    Price_1.default.belongsTo(Product_1.default, {
        foreignKey: 'productId',
        as: 'product',
    });
};
exports.default = setupAssociations;
