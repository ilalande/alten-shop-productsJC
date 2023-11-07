import { Request, Response, ErrorRequestHandler } from 'express';
import {
  // create,
  // update,
  // remove,
  findAll,
  // findById,
} from '../models/productManager';

class ProductController {
  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await findAll();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ Error: 'Internal Server Error' });
    }
  }

  // getProductById(req: Request, res: Response): void {
  //   try {
  //     const productId = req.params.id;
  //     const product = findById(productId);

  //     if (product) {
  //       res.json(product);
  //     } else {
  //       res.status(404).json({ Error: 'Product not found' });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ Error: 'Internal Server Error' });
  //   }
  // }

  // createProduct(req: Request, res: Response): void {
  //   try {
  //     const productData = req.body;
  //     const createdProduct = create(productData);
  //     res.status(201).json(createdProduct);
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ Error: 'Internal Server Error' });
  //   }
  // }

  // updateProduct(req: Request, res: Response): void {
  //   try {
  //     const productId = req.params.id;
  //     const updatedProduct = update(productId, req.body);

  //     if (updatedProduct) {
  //       res.status(200).json(updatedProduct);
  //     } else {
  //       res.status(404).json({ Error: 'Product not found' });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ error: 'Internal Server Error' });
  //   }
  // }

  // deleteProduct(req: Request, res: Response): void {
  //   try {
  //     const productId = req.params.id;
  //     const deletedProduct = remove(productId);

  //     if (deletedProduct) {
  //       res.status(200).json({ message: 'Product deleted successfully' });
  //     } else {
  //       res.status(404).json({ Error: 'Product not found' });
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ Error: `Unable to delete resource` });
  //   }
  // }
}

export default new ProductController();
