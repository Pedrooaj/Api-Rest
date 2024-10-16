'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.changeColumn(
      'alunos', // Alunos referente a tabela
      'email',  // Email referente a coluna
      { 
        type: Sequelize.STRING ,
        allowNull: false,
        unique: true
      });
     
  },

  async down (queryInterface, Sequelize) {}
};
