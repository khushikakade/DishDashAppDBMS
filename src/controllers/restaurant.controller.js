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
exports.deleteMenuItem = exports.updateMenuItem = exports.addMenuItem = exports.deleteRestaurant = exports.updateRestaurant = exports.getRestaurantById = exports.getRestaurants = exports.createRestaurant = void 0;
var restaurantService = require("../services/restaurant.service");
var createRestaurant = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, restaurantService.createRestaurant(req.body)];
            case 1:
                restaurant = _a.sent();
                res.status(201).json(restaurant);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createRestaurant = createRestaurant;
var getRestaurants = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurants, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, restaurantService.getRestaurants()];
            case 1:
                restaurants = _a.sent();
                res.json(restaurants);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getRestaurants = getRestaurants;
var getRestaurantById = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, restaurantService.getRestaurantById(Number(req.params.id))];
            case 1:
                restaurant = _a.sent();
                if (restaurant) {
                    res.json(restaurant);
                }
                else {
                    res.status(404).json({ message: 'Restaurant not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getRestaurantById = getRestaurantById;
var updateRestaurant = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, restaurantService.updateRestaurant(Number(req.params.id), req.body)];
            case 1:
                restaurant = _a.sent();
                if (restaurant) {
                    res.json(restaurant);
                }
                else {
                    res.status(404).json({ message: 'Restaurant not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateRestaurant = updateRestaurant;
var deleteRestaurant = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, restaurantService.deleteRestaurant(Number(req.params.id))];
            case 1:
                restaurant = _a.sent();
                if (restaurant) {
                    res.json({ message: 'Restaurant deleted' });
                }
                else {
                    res.status(404).json({ message: 'Restaurant not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteRestaurant = deleteRestaurant;
var addMenuItem = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, restaurantService.addMenuItem(Number(req.params.id), req.body)];
            case 1:
                restaurant = _a.sent();
                if (restaurant) {
                    res.json(restaurant);
                }
                else {
                    res.status(404).json({ message: 'Restaurant not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                next(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addMenuItem = addMenuItem;
var updateMenuItem = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, restaurantService.updateMenuItem(Number(req.params.id), Number(req.params.itemId), req.body)];
            case 1:
                restaurant = _a.sent();
                if (restaurant) {
                    res.json(restaurant);
                }
                else {
                    res.status(404).json({ message: 'Restaurant or menu item not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                next(error_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateMenuItem = updateMenuItem;
var deleteMenuItem = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, restaurantService.deleteMenuItem(Number(req.params.id), Number(req.params.itemId))];
            case 1:
                restaurant = _a.sent();
                if (restaurant) {
                    res.json(restaurant);
                }
                else {
                    res.status(404).json({ message: 'Restaurant or menu item not found' });
                }
                return [3 /*break*/, 3];
            case 2:
                error_8 = _a.sent();
                next(error_8);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteMenuItem = deleteMenuItem;
