import { PrismaClient } from '@prisma/client';
import { Product } from '../custom-types/product.js';
const prisma = new PrismaClient();

export async function findAll(): Promise<Product[]> {
  const products = await prisma.product.findMany();
  return products;
}

// export async function findById(id: string): Promise<Product> {
//   return await prisma.product.findUnique({
//     where: {
//       id: parseInt(id),
//     },
//   });
// }

// export async function create(newProduct: Product): Promise<Product> {
//   return await prisma.product.create({
//     data: newProduct,
//   });
// }

// export async function update(id: string, productToUpdate: Product) {
//   return await prisma.product.update({
//     where: {
//       id: parseInt(id),
//     },
//     data: productToUpdate,
//   });
// }

// export async function remove(id: string) {
//   return await prisma.product.update({
//     where: {
//       id: parseInt(id),
//     },
//   });
// }
