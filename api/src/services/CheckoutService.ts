import { OrderSummary } from '../models/OrderSummary';
import { OrderRequest } from './requests/OrderRequest';
import { OrderHandler } from './helper/OrderHandler';
import { ProductsService } from './ProductsService';

export class CheckoutService {

  static makeCheckout(orderRequest: OrderRequest[]): OrderSummary {
    const newOrder = new OrderHandler();

    for (const productOrder of orderRequest) {
      const quantity = Number(productOrder.quantity);
      if (!quantity) {
        continue;
      }

      const product = ProductsService.getById(productOrder.productId);
      newOrder.add(product, quantity);
    }

    return newOrder.getOrderSummary();
  }

}