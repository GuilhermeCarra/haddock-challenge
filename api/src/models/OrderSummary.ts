export interface OrderSummary {
  products: ProductSummary[];
  discountTotal: number;
  total: number;
}

export interface ProductSummary {
  name: string;
  quantity: number;
}