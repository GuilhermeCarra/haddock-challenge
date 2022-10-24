import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OrderPage from './pages/order/OrderPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <OrderPage/>
  </React.StrictMode>
);
