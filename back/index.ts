import express, { Express, Request, Response } from 'express';
import { productRoutes } from './src/routes/product.route';
import cors from 'cors';

require('dotenv').config();
const app: Express = express();
app.use(express.json());
app.use(cors());
const port = parseInt(process.env.SERVER_PORT ?? '5000', 10);
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Alten product shop API');
});

app.use('/products', productRoutes);
