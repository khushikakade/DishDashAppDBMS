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
var Platform = /** @class */ (function (_super) {
    __extends(Platform, _super);
    function Platform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Platform;
}(sequelize_1.Model));
Platform.init({
    platform_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('Active', 'Inactive'),
        defaultValue: 'Active',
    },
    commission_rate: {
        type: sequelize_1.DataTypes.DECIMAL(5, 2),
        defaultValue: 0.00,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: 'platforms',
    timestamps: false,
});
exports.default = Platform;
