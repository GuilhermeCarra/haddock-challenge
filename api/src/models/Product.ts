export interface Product {
	id: string;
	restaurantId: string;
	category: ProductCategory;
	name: string;
	price: number;
	currency: string;
	deals: ProductDeal[]
}

export const ProductCategories = <const>['starter', 'rice', 'meat'];
export type ProductCategory = typeof ProductCategories[number];

export const ProductDeals = <const>['2_for_1', 'pack_promotion'];
export type ProductDeal = typeof ProductDeals[number];