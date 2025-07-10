'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      jalan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rt: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rw: {
        type: Sequelize.STRING,
        allowNull: false
      },
      desa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kecamatan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kabupaten: {
        type: Sequelize.STRING,
        allowNull: false
      },
      provinsi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};