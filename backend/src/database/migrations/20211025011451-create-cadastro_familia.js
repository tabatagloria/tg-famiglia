'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cadastro_familia', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      //referência o id do usuário que cadastrou o familiar
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE', //sempre que houver alguma alteração de relacionamento na tabela users será refretido também aqui
        onDelete: 'CASCADE',
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      parentesco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.STRING,
      },
      local_nascimento:{
        type: Sequelize.STRING,
      },
      casado:{
        type: Sequelize.STRING,
      },
      nome_conjuge:{
        type: Sequelize.STRING,
      },
      data_casamento:{
        type: Sequelize.STRING,
      },
      local_casamento:{
        type: Sequelize.STRING,
      },
      falecido:{
        type: Sequelize.STRING,
      },
      data_obito:{
        type: Sequelize.STRING,
      },
      local_obito:{
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
     await queryInterface.dropTable('cadastro_familia');
     
  }
};
