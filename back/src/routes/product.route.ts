import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productRoutes: Router = Router();

// Routes pour les produits

productRoutes.get('/', ProductController.getAllProducts);
productRoutes.get('/:id', ProductController.getProductById);
productRoutes.post('/', ProductController.createProduct);
productRoutes.put('/:id', ProductController.editProduct);
productRoutes.delete('/:id', ProductController.deleteProduct);

export { productRoutes };
