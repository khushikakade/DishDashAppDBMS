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
var restaurant_model_1 = require("./restaurant.model");
var MenuItem = /** @class */ (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MenuItem;
}(sequelize_1.Model));
MenuItem.init({
    item_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    restaurant_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    item_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: sequelize_1.DataTypes.ENUM('Veg', 'Non-Veg', 'Egg'),
        allowNull: false,
    },
    base_price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    image_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: 'menu_items',
    timestamps: false,
});
// Associations
MenuItem.belongsTo(restaurant_model_1.default, { foreignKey: 'restaurant_id' });
restaurant_model_1.default.hasMany(MenuItem, { foreignKey: 'restaurant_id' });
exports.default = MenuItem;
