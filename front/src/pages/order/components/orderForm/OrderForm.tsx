import { FC, SyntheticEvent } from "react"
import { Product } from "../../../../models/Product";
import { ProductInput } from "./productInput/ProductInput";

interface OrderFormProps {
  products: Product[];
  onFinishOrder: (event: SyntheticEvent) => Promise<void>
  onOrderProduct: (product: Product, quantity: number) => void;
}

export const OrderForm: FC<OrderFormProps> = ({ products, onFinishOrder, onOrderProduct }) => {
  return (
    <div className="page-container">
      <div className="main-container">
        <div className="title">Please, select the products for your order:</div>
        <form className="products-list" onSubmit={onFinishOrder}>
          {products.map(product => <ProductInput key={product.id} product={product} orderProduct={onOrderProduct}/>)}
          <button>Order now!</button>
        </form>
      </div>
    </div>
  )
}
