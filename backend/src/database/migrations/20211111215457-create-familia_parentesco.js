'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('familia_parentesco', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
       familiar_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'familiares2', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      parentesco_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'parentesco2', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
     await queryInterface.dropTable('familia_parentesco');
     
  }
};