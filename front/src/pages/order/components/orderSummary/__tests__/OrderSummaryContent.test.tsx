import { render, screen } from '@testing-library/react';
import { OrderSummaryContent } from '../OrderSummaryContent';

const summaryMock = {
  products: [{ name: 'Pepperoni pizza', quantity: 2 }],
  discountTotal: 12,
  total: 24
};

const renderContent = () => {
  render(<OrderSummaryContent orderSummary={summaryMock}/>);
};

describe('OrderSummaryContent', () => {

  describe('render', () => {
    it('should render without errors', () => {
      renderContent();

      const title = screen.getByText(/thanks for your order!/i);
      const subtotal = screen.getByText(/subtotal: 24 €/i);
      const discounts = screen.getByText(/discounts: 12 €/i);
      const total = screen.getByText(/total: 12 €/i);
      expect(title).toBeInTheDocument();
      expect(subtotal).toBeInTheDocument();
      expect(discounts).toBeInTheDocument();
      expect(total).toBeInTheDocument();
    });
  });

});
