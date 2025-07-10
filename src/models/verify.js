'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class verify extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.verify, {
        foreignKey:'id_user',
        as:'user'
      })
    }
  }
  verify.init({
    id_user: DataTypes.INTEGER,
    gambar_lampiran: DataTypes.STRING,
    verifikasi: DataTypes.STRING,
    keterangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'verify',
    tableName: 'verifies'
  });
  return verify;
};