import Sequelize from "sequelize";
import databaseConfig from "../config/database.js"; // importação da conexão e configuração do banco de dados
import Aluno from "../models/Aluno.js";
import User from "../models/User.js";
import Foto from "../models/Foto.js";

// Array de models
const models = [Aluno, User, Foto];

// Conexão com o banco de dados via sequelize
const connection = new Sequelize(databaseConfig);

// Listando models e chamando o método init para validar a conexão
models.forEach((model) => {
    model.init(connection)
});

models.forEach((model) => model.associate && model.associate(connection.models));
