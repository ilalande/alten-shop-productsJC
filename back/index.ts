import express, { Express, Request, Response } from 'express';
import { productRoutes } from './src/routes/product.route.js';
require('dotenv').config();
const app: Express = express();
app.use(express.json());
const port = parseInt(process.env.SERVER_PORT ?? '5000', 10);
app.listen(port, () => {
  // écouter les les connexions entrantes => le serveur est créé mais il n'y a pas encore de routes

  console.log(`Server is listening on ${port}`);
});
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/products', productRoutes);
