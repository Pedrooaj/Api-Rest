"use strict";
// seeds servem para realizar testes no banco de dados
const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "users", 
            [{
                nome: "Pedro",
                email: "pedroSeed@gmail.com",
                password_hash: await bcryptjs.hash("123456", 8),
                created_at: new Date(),
                updated_at: new Date(),
     
            },
            {
                nome: "Pedro2",
                email: "pedroSeed2@gmail.com",
                password_hash: await bcryptjs.hash("123456", 8),
                created_at: new Date(),
                updated_at: new Date(),
      
            },
            {
                nome: "Pedro3",
                email: "pedroSeed3@gmail.com",
                password_hash: await bcryptjs.hash("123456", 8),
                created_at: new Date(),
                updated_at: new Date(),
        
            }
            ], 
            {}
        );
    },

    async down (queryInterface, Sequelize) {}
};
