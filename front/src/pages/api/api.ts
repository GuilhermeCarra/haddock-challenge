import { OrderSummary } from "../../models/OrderSummary";
import { Product } from "../../models/Product";
import { doGet, doPost } from "./helper";

const API = {
	getProducts: async (restaurantId: string) =>
		doGet<Product[]>(`/products/${restaurantId}`),
	checkout: async (checkoutRequest: object) =>
		doPost<OrderSummary>(`/checkout`, checkoutRequest)
}

export default API;