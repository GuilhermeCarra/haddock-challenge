import { OrderHandler } from '../OrderHandler';
import products from '../../../repositories/Products';

const springRoll = products[0];
const friedRice = products[1];
const chicken = products[2];

describe('OrderHandler', () => {

  describe('add', () => {
    const handler = new OrderHandler();

    it('should add a new product in OrderHandler', () => {
      handler.add(springRoll, 1);
      expect(handler.products.length).toBe(1);
    });
  });

  describe('getOrderSummary', () => {
    const handler = new OrderHandler();

    it('should get no discount if theres no ordered product', () => {
      const summary = handler.getOrderSummary();

      expect(summary.discountTotal).toBe(0);
      expect(summary.total).toBe(0);
    });

    it('should get 4.5 discount if 2 Spring rolls are ordered', () => {
      handler.add(springRoll, 2);
      const summary = handler.getOrderSummary();

      expect(summary.discountTotal).toBe(4.5);
      expect(summary.total).toBe(9);
    });

    it('should get 9.5 discount if 2 Spring rolls are ordered and price is greater than 20', () => {
      handler.add(friedRice, 2);
      const summary = handler.getOrderSummary();

      expect(summary.discountTotal).toBe(9.5);
      expect(summary.total).toBe(21);
    });

    it('should get 12.5 discount if 2 Spring rolls are ordered and price is greater than 20 and it has a pack', () => {
      handler.add(chicken, 1);
      const summary = handler.getOrderSummary();

      expect(summary.discountTotal).toBe(12.5);
      expect(summary.total).toBe(27.5);
    });
  });
});