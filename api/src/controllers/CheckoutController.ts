import express, { Request, Response } from 'express';
import { CheckoutService } from '../services/CheckoutService';

const app = express();

app.post('/', (req: Request, res: Response) => {
  const summary = CheckoutService.makeCheckout(req.body.orderProducts);
  return res.status(200).json(summary);
});

export default app;