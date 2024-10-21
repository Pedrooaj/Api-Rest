import express from "express";
import HomeRoute from "./routes/HomeRoutes";
import UserRoute from "./routes/UserRoutes";
import TokenRoute from "./routes/TokenRoutes";
import AlunoRoute from "./routes/AlunoRoutes";
import PhotoRoute from "./routes/PhotoRoutes";
import { resolve } from "path";

import dotenv from "dotenv";
dotenv.config();

import "./database"; // Importando arquivo que contem a conexão com o banco de dados e Models





class App {

    constructor(){
        this.app = express(); // executa a aplicação express.Application assim que o construtor for chamado
        this.middlewares(); // Executa todos middlewares
        this.router(); // executa a função router para chamar rotas
    }

    router(){
        this.app.use("/", HomeRoute); // se refere a rota Home
        this.app.use("/users", UserRoute); // Se refere a rota de usuarios
        this.app.use("/token", TokenRoute); // Rota para gerar tokens
        this.app.use("/alunos", AlunoRoute); // rota referente a alunos
        this.app.use("/fotos", PhotoRoute); // Rota para realizar upload de imagens
    }

    middlewares(){
        // Aqui configuramos todos middlewares necessarios para nossa aplicação funcionar corretamente
        this.app.use(express.urlencoded({extended: true})); // Utilizado para maior compatibilidade e transformar valores de um formulario em objetos javascript
        this.app.use(express.json()); // habilitando o json para retornamos para o front-end
        this.app.use(express.static(resolve(__dirname, '..','uploads'))); // configuração do middleware para arquivos estáticos da aplicação

    }   
}

export default new App().app;