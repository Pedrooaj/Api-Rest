'use strict';
// Aqui utilizamos conceitos para relação entre tabelas como CASCADE, RESTRICT, NO ACTION e SET NULL


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // references - Serve para referenciar a tabela pai e espelhar o id Foreign Keys
        references: {
          model: 'alunos',
          key: 'id'
        },
        onDelete: 'SET NULL', // Se for apagado o pai o filho sera setado como null
        onUpdate: 'CASCADE' // CASCADE - Se for alterada a primary key do pai o filho támbem sera alterado
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });
    
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('fotos')
  }
};
