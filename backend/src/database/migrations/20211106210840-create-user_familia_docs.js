'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_familia_docs', { 
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
       familiar_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'familiares2', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      documentos_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'docs2', key: 'id' },
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
     await queryInterface.dropTable('user_familia_docs');
     
  }
};