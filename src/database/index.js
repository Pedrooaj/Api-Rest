import Sequelize from "sequelize";
import databaseConfig from "../config/database.js";
import Aluno from "../models/Aluno.js";

// Array de models
const models = [Aluno];

// Conexão com o banco de dados
const connection = new Sequelize(databaseConfig);


// Listando models
models.forEach((model) => {
    model.init(connection)
})

