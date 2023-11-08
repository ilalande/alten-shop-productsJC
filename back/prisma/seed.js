const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { products } = require('./productsData.js');

const load = async () => {
  console.log('seeding');
  try {
    await prisma.product.deleteMany();
    console.log('Deleted records in product table');

    await prisma.product.createMany({
      data: products,
    });
    console.log('Added product data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
