"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePriceComparison = exports.updatePriceComparison = exports.getPriceComparisonById = exports.getPriceComparisons = exports.createPriceComparison = void 0;
var priceComparison_model_1 = require("../models/priceComparison.model");
var menuItem_model_1 = require("../models/menuItem.model");
var restaurant_model_1 = require("../models/restaurant.model");
var location_model_1 = require("../models/location.model");
var platform_model_1 = require("../models/platform.model");
var createPriceComparison = function (priceComparisonData) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, priceComparison_model_1.default.create(priceComparisonData)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createPriceComparison = createPriceComparison;
var getPriceComparisons = function () { return __awaiter(void 0, void 0, void 0, function () {
    var menuItems;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, menuItem_model_1.default.findAll({
                    include: [
                        {
                            model: restaurant_model_1.default,
                            include: [location_model_1.default]
                        },
                        {
                            model: priceComparison_model_1.default,
                            include: [platform_model_1.default]
                        }
                    ]
                })];
            case 1:
                menuItems = _a.sent();
                return [2 /*return*/, menuItems.map(function (item) {
                        var platforms = item.PriceComparisons
                            .filter(function (pc) { return pc.Platform.status === 'Active'; })
                            .map(function (pc) { return ({
                            name: pc.Platform.name,
                            price: parseFloat(pc.final_price),
                            base_price: parseFloat(pc.platform_base_price),
                            packaging: parseFloat(pc.packaging_charge),
                            delivery: parseFloat(pc.delivery_fee),
                            discount: parseFloat(pc.discount_percentage),
                            link: "https://".concat(pc.Platform.name.toLowerCase(), ".com/search?q=").concat(encodeURIComponent(item.item_name)),
                        }); });
                        // Identify Best Deal
                        if (platforms.length > 0) {
                            var minPrice_1 = Math.min.apply(Math, platforms.map(function (p) { return p.price; }));
                            platforms.forEach(function (p) {
                                if (p.price === minPrice_1)
                                    p.isBest = true;
                            });
                        }
                        return {
                            id: item.item_id,
                            name: item.item_name,
                            description: "".concat(item.item_name, " from ").concat(item.Restaurant.name, " (").concat(item.Restaurant.Location.area_name, "). ").concat(item.Restaurant.famous_for, "."),
                            image: item.image_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
                            platforms: platforms
                        };
                    })];
        }
    });
}); };
exports.getPriceComparisons = getPriceComparisons;
var getPriceComparisonById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, priceComparison_model_1.default.findByPk(id)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.getPriceComparisonById = getPriceComparisonById;
var updatePriceComparison = function (id, priceComparisonData) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, priceComparison_model_1.default.update(priceComparisonData, { where: { id: id } })];
            case 1:
                _a.sent();
                return [4 /*yield*/, priceComparison_model_1.default.findByPk(id)];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.updatePriceComparison = updatePriceComparison;
var deletePriceComparison = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, priceComparison_model_1.default.destroy({ where: { id: id } })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.deletePriceComparison = deletePriceComparison;
