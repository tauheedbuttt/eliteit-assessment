'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Star.belongsTo(models.Product, {
        foreignKey: 'product',
        onDelete: 'CASCADE',
      })
    }
  }
  Star.init({
    product: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Star',
  });
  return Star;
};