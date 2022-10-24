"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsService_1 = require("../services/ProductsService");
const app = (0, express_1.default)();
app.get('/:restaurantId', (req, res) => {
    const products = ProductsService_1.ProductsService.findByRestaurantId(req.params.restaurantId);
    return res.status(200).json(products);
});
exports.default = app;
