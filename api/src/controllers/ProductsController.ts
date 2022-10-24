import express, { Request, Response } from 'express';
import { ProductsService } from '../services/ProductsService';

const app = express();

app.get('/:restaurantId', (req: Request, res: Response) => {
  const products = ProductsService.findByRestaurantId(req.params.restaurantId)
  return res.status(200).json(products);
});

export default app;
