import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class User extends Model {
  public id!: number;

  public name!: string;

  public about!: string;

  public avatar!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(30),
      allowNull: false,
      validate: {
        len: [2, 30],
      },
    },
    about: {
      type: new DataTypes.STRING(200),
      allowNull: false,
      validate: {
        len: [2, 200],
      },
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  },
);

export default User;
