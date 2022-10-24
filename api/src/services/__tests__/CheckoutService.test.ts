import { CheckoutService } from "../CheckoutService";

describe('CheckoutService', () => {
  describe('makeCheckout', () => {

    it('should return a proper order summary', () => {
			const response = CheckoutService.makeCheckout([{ productId: '21', quantity: '2' }]);
			expect(response.discountTotal).toBe(0);
			expect(response.total).toBe(12);
    });

    it('should throw error if an ID product does not exist in DB', () => {
			const invalidRequest = [{ productId: '121', quantity: '2' }];
			expect(() => CheckoutService.makeCheckout(invalidRequest))
				.toThrowError('Product not found');
    });
  });
});