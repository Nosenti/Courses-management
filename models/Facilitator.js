'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facilitator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Facilitator.init({
    facilitator_id: DataTypes.INTEGER,
    facilitator_name: DataTypes.STRING,
    facilitator_email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Facilitator',
  });
  return Facilitator;
};