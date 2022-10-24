"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutService = void 0;
const OrderHandler_1 = require("./helper/OrderHandler");
const ProductsService_1 = require("./ProductsService");
class CheckoutService {
    static makeCheckout(orderRequest) {
        const newOrder = new OrderHandler_1.OrderHandler();
        for (const productOrder of orderRequest) {
            const quantity = Number(productOrder.quantity);
            if (!quantity) {
                continue;
            }
            const product = ProductsService_1.ProductsService.getById(productOrder.productId);
            newOrder.add(product, quantity);
        }
        return newOrder.getOrderSummary();
    }
}
exports.CheckoutService = CheckoutService;
