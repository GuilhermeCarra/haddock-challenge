import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ProductController from './src/controllers/ProductsController';
import CheckoutController from './src/controllers/CheckoutController';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/products', ProductController)
app.use('/checkout', CheckoutController)

app.listen(port, () => {
    console.log(`⚡️Server is running at https://localhost:${port}`);
});