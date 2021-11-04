'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('familiares2', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.STRING,
      },
      casado: {
        type: Sequelize.STRING,
      },
      data_casamento: {
        type: Sequelize.STRING,
      },
      falecido: {
        type: Sequelize.STRING,
      },
      data_obito: {
        type: Sequelize.STRING,
      },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
    });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('familiares2');
     
  }
};