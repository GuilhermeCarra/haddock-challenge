import { FC } from "react"
import './ProductSummary.css'

interface ProductSummaryProps{
  productName: string;
  quantity: number;
}

export const ProductSummary: FC<ProductSummaryProps> = ({ productName, quantity }) => {
  return (
    <div className="product-container">
      <div>{productName}</div>
      <div className="product-quantity">x{quantity}</div>
    </div>
  )
}