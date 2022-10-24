import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import OrderPage from '../OrderPage';
import API from '../../api/api';

const productsMock = [{ id: '1', name: 'Pepperoni pizza', price: 10 }];

const renderContent = () => {
  render(<OrderPage/>);
};

describe('Content', () => {

  describe('render', () => {
    it('should render without errors', () => {
      renderContent();

      const title = screen.getByText(/please, select the products for your order:/i);
      expect(title).toBeInTheDocument();
    });
  });

  describe('order form', () => {
    it('should render form items', async () => {
      API.getProducts = jest.fn().mockReturnValueOnce(Promise.resolve(productsMock));
      renderContent();

      await waitFor(() => {
        const productName = screen.getByText(/pepperoni pizza/i);
        expect(productName).toBeInTheDocument();
      });
    });
  });
});
