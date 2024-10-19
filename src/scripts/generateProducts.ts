/* eslint-disable no-console */
import { faker } from '@faker-js/faker';
import sequelize from '../db';
import Product from '../models/Product.model';

const generateProducts = async (count: number) => {
  const products = [];

  for (let i = 0; i < count; i += 1) {
    products.push({
      title: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      sizes: [
        {
          rusSize: faker.number.toString(),
          eurSize: faker.number.toString(),
        },
      ],
      imageUrl: faker.image.avatar(),
    });
  }

  try {
    await sequelize.sync({ force: false });
    await Product.bulkCreate(products);
    console.log(`${count} products have been created`);
  } catch (error) {
    console.error('Failed to create products:', error);
  } finally {
    await sequelize.close();
  }
};

generateProducts(100);
