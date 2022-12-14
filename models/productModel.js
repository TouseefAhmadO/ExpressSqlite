const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')


class Product extends Model { }

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Enter your Name"
        },
        notEmpty: {
          msg: "Please Enter your Name"
        }
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  },
  {
    sequelize,
    modelName: "product",
    timestamps: false
  }
);

module.exports = Product;