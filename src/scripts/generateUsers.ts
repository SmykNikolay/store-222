/* eslint-disable no-console */
import { faker } from '@faker-js/faker';
import sequelize from '../db';
import User from '../models/User.model';

const generateUsers = async (count: number) => {
  const users = [];

  for (let i = 0; i < count; i += 1) {
    users.push({
      name: faker.name.fullName(),
      about: faker.lorem.sentence(),
      avatar: faker.image.avatar(),
    });
  }

  try {
    await sequelize.sync({ force: false });
    await User.bulkCreate(users);
    console.log(`${count} users have been created`);
  } catch (error) {
    console.error('Failed to create users:', error);
  } finally {
    await sequelize.close();
  }
};

generateUsers(100);
