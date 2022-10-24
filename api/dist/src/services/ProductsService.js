"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const Products_1 = __importDefault(require("../repositories/Products"));
class ProductsService {
    static findByRestaurantId(id) {
        return Products_1.default.filter(({ restaurantId }) => restaurantId === id);
    }
    static getById(productId) {
        const product = Products_1.default.find(({ id }) => id === productId);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }
}
exports.ProductsService = ProductsService;
