import { FC, SyntheticEvent, useEffect, useState } from "react"
import { Product } from "../../models/Product";
import { OrderRequest } from "../../models/OrderRequest";
import { OrderSummary } from "../../models/OrderSummary";
import API from "../api/api"
import { OrderForm } from "./components/orderForm/OrderForm";
import { OrderSummaryContent } from "./components/orderSummary/OrderSummaryContent";
import './OrderPage.css'

const OrderPage: FC = () => {
  const RESTAURANT_ID = '123';

  const [orderProducts, setOrderProducts] = useState<OrderRequest[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [orderSummary, setOrderSummary] = useState<OrderSummary>();

  useEffect(() => {
    API.getProducts(RESTAURANT_ID).then(value => setProducts(value));
  }, [RESTAURANT_ID])

  const onOrderProduct = (product: Product, quantity: number) => {
    const otherProducts = orderProducts.filter(({ productId }) => productId !== product.id);
    setOrderProducts([ ...otherProducts, { productId: product.id, quantity } ]);
  }

  const onFinishOrder = async (event: SyntheticEvent) => {
    event.preventDefault();
    const hasOrderProducts = Boolean(orderProducts.length);
    if (hasOrderProducts) {
      const orderSummary = await API.checkout({ orderProducts });
      setOrderSummary(orderSummary);
    }
  }

  if (orderSummary) {
    return <OrderSummaryContent orderSummary={orderSummary}/>
  }

  return <OrderForm products={products} onOrderProduct={onOrderProduct} onFinishOrder={onFinishOrder}/>
}

export default OrderPage;