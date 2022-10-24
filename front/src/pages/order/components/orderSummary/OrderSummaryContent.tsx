import { FC } from "react"
import { OrderSummary  } from "../../../../models/OrderSummary";
import { ProductSummary } from "./productSummary/ProductSummary";
import './orderSummaryContent.css'

interface OrderSummaryProps {
  orderSummary: OrderSummary;
}

export const OrderSummaryContent: FC<OrderSummaryProps> = ({ orderSummary }) => {
  const { products, discountTotal, total } = orderSummary;

  return (
    <div className="page-container">
      <div className="main-container">
        <div className="title">Thanks for your order!</div>
        <div className="products-list">
          {products.map(product =>
            <ProductSummary key={product.name} productName={product.name} quantity={product.quantity}/>)
          }
          <div className="summary-container">
            <div>Subtotal: {total} €</div>
            <div>Discounts: {discountTotal} €</div>
            <div>Total: {total - discountTotal} €</div>
          </div>
        </div>
      </div>
    </div>
  );
}