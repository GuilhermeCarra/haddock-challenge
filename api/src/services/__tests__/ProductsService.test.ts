import { ProductsService } from "../ProductsService";

describe('ProductsService', () => {
  describe('getById', () => {

    it('should return a proper order summary', () => {
			const response = ProductsService.getById('21');
			expect(response.name).toBe('Fried rice with pork');
			expect(response.price).toBe(6);
    });

    it('should throw error if an ID product does not exist in DB', () => {
			expect(() => ProductsService.getById('121'))
				.toThrowError('Product not found');
    });
  });
});