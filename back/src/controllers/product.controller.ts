import { Request, Response, ErrorRequestHandler } from 'express';
import {
  create,
  edit,
  remove,
  findAll,
  findById,
} from '../models/productManager';

class ProductController {
  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await findAll();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ Error: 'Internal Server Error' });
    }
  }

  async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const productId = req.params.id;
      const product = await findById(productId);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ Error: 'Product not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ Error: 'Internal Server Error' });
    }
  }

  async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const productData = req.body;
      const createdProduct = await create(productData);
      res.status(201).json(createdProduct);
    } catch (err) {
      console.error(err);
      res.status(500).json({ Error: 'Internal Server Error' });
    }
  }

  async editProduct(req: Request, res: Response): Promise<void> {
    try {
      const productId = req.params.id;
      const updatedProduct = await edit(productId, req.body);
      if (updatedProduct) {
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ Error: 'Product not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const productId = req.params.id;
      const deletedProduct = await remove(productId);

      if (deletedProduct) {
        res.status(200).json({ message: 'Product deleted successfully' });
      } else {
        res.status(404).json({ Error: 'Product not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ Error: `Unable to delete resource` });
    }
  }
}

export default new ProductController();
