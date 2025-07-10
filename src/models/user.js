'use strict';
const {
  Model
} = require('sequelize');
const { toDefaultValue } = require('sequelize/lib/utils');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.address, {
        foreignKey: 'id_user',
        as: 'addresses'
      });
      
      this.hasMany(models.verify, {
        foreignKey: 'id_user',
        as: 'verifies'
      });

      this.hasMany(models.Complaint, {
        foreignKey: 'id_user',
        as: 'complaints'
      });

    }
  }
  user.init({
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    no_telp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pengguna'
    }
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'users',
    timestamps: true
  });
  return user;
};