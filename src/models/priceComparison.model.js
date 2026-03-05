"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db_1 = require("../config/db");
var menuItem_model_1 = require("./menuItem.model");
var platform_model_1 = require("./platform.model");
var PriceComparison = /** @class */ (function (_super) {
    __extends(PriceComparison, _super);
    function PriceComparison() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PriceComparison;
}(sequelize_1.Model));
PriceComparison.init({
    comparison_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    item_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    platform_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    platform_base_price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    packaging_charge: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00,
    },
    delivery_fee: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00,
    },
    discount_percentage: {
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
        defaultValue: 0.00,
    },
    final_price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: true, // Managed by DB generated column or logic
    },
    last_updated: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: 'price_comparisons',
    timestamps: false,
});
// Associations
PriceComparison.belongsTo(menuItem_model_1.default, { foreignKey: 'item_id' });
menuItem_model_1.default.hasMany(PriceComparison, { foreignKey: 'item_id' });
PriceComparison.belongsTo(platform_model_1.default, { foreignKey: 'platform_id' });
platform_model_1.default.hasMany(PriceComparison, { foreignKey: 'platform_id' });
exports.default = PriceComparison;
