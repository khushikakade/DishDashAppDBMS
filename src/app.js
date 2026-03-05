"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var error_middleware_1 = require("./middleware/error.middleware");
var user_routes_1 = require("./routes/user.routes");
var product_routes_1 = require("./routes/product.routes");
var platform_routes_1 = require("./routes/platform.routes");
var order_routes_1 = require("./routes/order.routes");
var restaurant_routes_1 = require("./routes/restaurant.routes");
var redirection_routes_1 = require("./routes/redirection.routes");
var priceComparison_routes_1 = require("./routes/priceComparison.routes");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api/users', user_routes_1.default);
app.use('/api/products', product_routes_1.default);
app.use('/api/platforms', platform_routes_1.default);
app.use('/api/orders', order_routes_1.default);
app.use('/api/restaurants', restaurant_routes_1.default);
app.use('/api/redirections', redirection_routes_1.default);
app.use('/api/price-comparisons', priceComparison_routes_1.default);
app.use(error_middleware_1.default);
exports.default = app; // This allows server.ts to use it
