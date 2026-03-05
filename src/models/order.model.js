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
exports.OrderItem = exports.Order = void 0;
var sequelize_1 = require("sequelize");
var db_1 = require("../config/db");
var user_model_1 = require("./user.model");
var restaurant_model_1 = require("./restaurant.model");
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Order;
}(sequelize_1.Model));
exports.Order = Order;
Order.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    totalPrice: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('Pending', 'Preparing', 'Delivered', 'Cancelled'),
        allowNull: false,
        defaultValue: 'Pending',
    },
}, {
    sequelize: db_1.sequelize,
    tableName: 'orders',
});
var OrderItem = /** @class */ (function (_super) {
    __extends(OrderItem, _super);
    function OrderItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OrderItem;
}(sequelize_1.Model));
exports.OrderItem = OrderItem;
OrderItem.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    sequelize: db_1.sequelize,
    tableName: 'order_items',
});
// Associations
Order.belongsTo(user_model_1.default, { foreignKey: 'userId' });
user_model_1.default.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(restaurant_model_1.Restaurant, { foreignKey: 'restaurantId' });
restaurant_model_1.Restaurant.hasMany(Order, { foreignKey: 'restaurantId' });
Order.hasMany(OrderItem, { foreignKey: 'orderId' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });
