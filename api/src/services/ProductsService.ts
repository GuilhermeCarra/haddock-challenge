import { Product } from '../models/Product';
import Products from '../repositories/Products';

export class ProductsService {

	static findByRestaurantId(id: string): Product[] {
		return Products.filter(({ restaurantId }) => restaurantId === id);
	}

  static getById(productId: string): Product {
    const product = Products.find(({ id }) => id === productId)
    if (!product) {
      throw new Error('Product not found');
    }

    return product;
  }

}