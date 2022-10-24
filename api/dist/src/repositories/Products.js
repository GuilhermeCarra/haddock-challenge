"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    {
        id: '12',
        restaurantId: '123',
        name: 'Spring rolls',
        category: 'starter',
        price: 4.50,
        currency: 'eur',
        deals: [
            '2_for_1',
            'pack_promotion'
        ]
    },
    {
        id: '21',
        restaurantId: '123',
        name: 'Fried rice with pork',
        category: 'rice',
        price: 6.00,
        currency: 'eur',
        deals: [
            'pack_promotion'
        ]
    },
    {
        id: '37',
        restaurantId: '123',
        name: 'Chicken with almond sauce',
        category: 'meat',
        price: 6.50,
        currency: 'eur',
        deals: [
            'pack_promotion'
        ]
    }
];
exports.default = products;
