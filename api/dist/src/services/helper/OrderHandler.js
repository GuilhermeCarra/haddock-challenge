"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderHandler = void 0;
const SPEND_X_DEAL_DISCOUNT = 5;
const PACK_DEAL_DISCOUNT = 3;
class OrderHandler {
    constructor() {
        this.products = [];
    }
    add(product, quantity) {
        this.products.push({ product, quantity });
    }
    getOrderSummary() {
        const total = this.getTotal();
        const discountTotal = this.getDiscounts();
        return {
            products: this.products.map(({ product, quantity }) => ({ name: product.name, quantity })),
            total,
            discountTotal
        };
    }
    getDiscounts() {
        return this.calculateDeal2x1()
            + this.calculateDealSpendXSaveY()
            + this.calculateDealPackPromotion();
    }
    calculateDeal2x1() {
        const eligibleProducts = this.filterProductsByDeal('2_for_1');
        const discountPerProduct = eligibleProducts.map(({ product, quantity }) => {
            return Math.floor(quantity / 2) * product.price;
        });
        return this.sumArray(discountPerProduct);
    }
    calculateDealSpendXSaveY() {
        const total = this.getTotal();
        return total > 20 ? SPEND_X_DEAL_DISCOUNT : 0;
    }
    calculateDealPackPromotion() {
        const eligibleProducts = this.filterProductsByDeal('pack_promotion');
        const starterMeals = this.getProductsCountByCategory('starter', eligibleProducts);
        const riceMeals = this.getProductsCountByCategory('rice', eligibleProducts);
        const meatMeals = this.getProductsCountByCategory('meat', eligibleProducts);
        const hasPack = starterMeals && riceMeals && meatMeals;
        if (!hasPack) {
            return 0;
        }
        return Math.min(starterMeals, riceMeals, meatMeals) * PACK_DEAL_DISCOUNT;
    }
    filterProductsByDeal(dealName) {
        return this.products.filter(({ product }) => product.deals.some(deal => deal === dealName));
    }
    getProductsCountByCategory(categoryName, products) {
        const filtered = products.filter(({ product }) => product.category === categoryName);
        return filtered.reduce((partialSum, product) => partialSum + product.quantity, 0);
    }
    getTotal() {
        const productsTotal = this.products.map(({ product, quantity }) => product.price * quantity);
        return this.sumArray(productsTotal);
    }
    sumArray(array) {
        return array.reduce((partialSum, price) => partialSum + price, 0);
    }
}
exports.OrderHandler = OrderHandler;
