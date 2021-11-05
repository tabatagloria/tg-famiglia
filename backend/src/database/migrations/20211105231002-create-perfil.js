'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('perfis2', { 
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
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenomes:{
        type: Sequelize.STRING,
        allowNull: false,
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
     await queryInterface.dropTable('perfis2');
     
  }
};