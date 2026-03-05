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
var location_model_1 = require("./location.model");
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Restaurant;
}(sequelize_1.Model));
Restaurant.init({
    restaurant_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    location_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
    },
    famous_for: {
        type: sequelize_1.DataTypes.STRING,
    },
    rating: {
        type: sequelize_1.DataTypes.DECIMAL(2, 1),
    },
    is_active: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: 'restaurants',
    timestamps: false,
});
// Associations
Restaurant.belongsTo(location_model_1.default, { foreignKey: 'location_id' });
location_model_1.default.hasMany(Restaurant, { foreignKey: 'location_id' });
exports.default = Restaurant;
