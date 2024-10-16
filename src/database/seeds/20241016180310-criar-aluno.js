'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('alunos', [
      {
        nome: "Pedro",
        sobrenome: "Lemoos",
        email: "pedroo@gmaillll.com",
        idade: 18,
        peso: 60.0,
        altura: 1.70
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {}
};
