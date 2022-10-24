import { FC } from "react"
import { Product } from "../../../../../models/Product";
import './ProductInput.css'

interface ProductInputProps{
  product: Product;
  orderProduct: (product: Product, quantity: number) => void;
}

export const ProductInput: FC<ProductInputProps> = ({ product, orderProduct }) => {
  const handleChange = (event: any) =>
    orderProduct(product, event.target.value)

  return (
    <div className="product-container">
      <div>{product.name} ({product.price} €)</div>
      <input type="number" min="1" step="1" className="product-input" onChange={handleChange}/>
    </div>
  )
}