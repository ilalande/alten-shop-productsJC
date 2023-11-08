/*
  Warnings:

  - The values [ACESSORIES,CLOTHING,FITNESS,ELECTRONICS] on the enum `Product_category` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `category` ENUM('Accessories', 'Clothing', 'Fitness', 'Electronics') NOT NULL;
