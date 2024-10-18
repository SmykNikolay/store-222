import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

class Card extends Model {
  public id!: number;

  public name!: string;

  public link!: string;

  public ownerId!: number;

  public likes!: number[];

  public createdAt!: Date;
}

Card.init(
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
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'cards',
  },
);

export default Card;
