import prisma from '../../prisma/index.js';
import { Product } from '../types/product.js';
import { NewProduct } from '../types/payload.js';

export async function findAll(): Promise<Product[]> {
  const products = await prisma.product.findMany();
  return products;
}

export async function findById(id: number): Promise<Product | null> {
  return await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
}

export async function create(newProduct: NewProduct): Promise<Product | null> {
  return await prisma.product.create({
    data: newProduct,
  });
}

export async function edit(
  id: number,
  productToUpdate: NewProduct
): Promise<Product | null> {
  return await prisma.product.update({
    where: {
      id: id,
    },
    data: productToUpdate,
  });
}

export async function remove(id: number) {
  return await prisma.product.delete({
    where: {
      id: id,
    },
  });
}
