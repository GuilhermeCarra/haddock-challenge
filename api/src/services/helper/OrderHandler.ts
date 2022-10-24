import { OrderSummary } from "../../models/OrderSummary";
import { Product, ProductCategory, ProductDeal } from "../../models/Product";

const SPEND_X_DEAL_DISCOUNT = 5;
const PACK_DEAL_DISCOUNT = 3;

interface OrderProducts {
	product: Product;
	quantity: number;
}

export class OrderHandler {
	public products: OrderProducts[]

	constructor() {
		this.products = [];
}

	add(product: Product, quantity: number): void {
		this.products.push({ product, quantity })
	}

	getOrderSummary(): OrderSummary {
		const total = this.getTotal();
		const discountTotal = this.getDiscounts();

		return {
			products: this.products.map(({ product, quantity }) => ({ name: product.name, quantity })),
			total,
			discountTotal
		}
	}

	private getDiscounts(): number {
		return this.calculateDeal2x1()
			+ this.calculateDealSpendXSaveY()
			+ this.calculateDealPackPromotion()
	}

	private calculateDeal2x1(): number {
		const eligibleProducts = this.filterProductsByDeal('2_for_1');
		const discountPerProduct: number[] = eligibleProducts.map(({ product, quantity }) => {
			return Math.floor(quantity / 2) * product.price;
		});
		return this.sumArray(discountPerProduct);
	}

	private calculateDealSpendXSaveY(): number {
		const total = this.getTotal();
		return total > 20 ? SPEND_X_DEAL_DISCOUNT : 0;
	}

	private calculateDealPackPromotion(): number {
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

	private filterProductsByDeal(dealName: ProductDeal): OrderProducts[]  {
		return this.products.filter(({ product }) => product.deals.some(deal => deal === dealName))
	}

	private getProductsCountByCategory(categoryName: ProductCategory, products: OrderProducts[]): number  {
		const filtered = products.filter(({ product }) => product.category === categoryName);
		return filtered.reduce((partialSum, product) => partialSum + product.quantity, 0);
	}

	private getTotal(): number {
		const productsTotal: number[] = this.products.map(({ product, quantity }) => product.price * quantity);
		return this.sumArray(productsTotal);
	}

	private sumArray(array: number[]): number {
		return array.reduce((partialSum, price) => partialSum + price, 0);
	}
}