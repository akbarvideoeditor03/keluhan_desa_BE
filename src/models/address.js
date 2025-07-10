'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'id_user',
        as: 'users'
      })
    }
  }
  Address.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    jalan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rw: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kecamatan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kabupaten: {
      type: DataTypes.STRING,
      allowNull: false
    },
    provinsi: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};