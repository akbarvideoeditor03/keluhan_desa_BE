'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: 'id_user',
        as: 'user'
      });
    }
  }
  address.init({
    id_user: DataTypes.INTEGER,
    jalan: DataTypes.STRING,
    rt: DataTypes.STRING,
    rw: DataTypes.STRING,
    desa: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kabupaten: DataTypes.STRING,
    provinsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'address',
    tableName: 'addresses'
  });
  return address;
};