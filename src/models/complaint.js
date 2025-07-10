'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Complaint extends Model {
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
      
      this.belongsTo(models.user, {
        foreignKey: 'id_user_kepdes',
        as: 'user'
      });
    }
  }
  Complaint.init({
    id_user: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    tanggal: DataTypes.DATE,
    lokasi: DataTypes.STRING,
    patokan: DataTypes.STRING,
    id_user_kepdes: DataTypes.INTEGER,
    gambar: DataTypes.STRING,
    status_pengaduan: DataTypes.STRING,
    respon: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Complaint',
    tableName: 'complaints'
  });
  return Complaint;
};