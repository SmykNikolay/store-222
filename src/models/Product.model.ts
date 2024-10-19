import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Product extends Model {
  public id!: number;

  public title!: string;

  public price!: number;

  public sizes!: Array<{
    rusSize: string;
    eurSize: string;
  }>;

  public imageUrl!: string;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sizes: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'products',
  },
);

export default Product;
