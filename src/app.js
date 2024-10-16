import express from "express";
import HomeRoute from "./routes/HomeRoutes";
import UserRoute from "./routes/UserRoutes";
import AlunoRoute from "./routes/AlunoRoutes";
import dotenv from "dotenv";
dotenv.config();

import "./database"; // Importando arquivo que contem a conexão com o banco de dados e Models
import TokenRoute from "./routes/TokenRoutes";



class App {

    constructor(){
        this.app = express(); // executa a aplicação express.Application assim que o construtor for chamado
        this.middlewares(); // Executa todos middlewares
        this.router(); // executa a função router para chamar rotas
    }

    router(){
        this.app.use("/", HomeRoute); // se refere a rota Home
        this.app.use("/users", UserRoute); // Se refere a rota de usuarios
        this.app.use("/tokens", TokenRoute);
        this.app.use("/alunos", AlunoRoute)
    }

    middlewares(){
        // Aqui configuramos todos middlewares necessarios para nossa aplicação funcionar corretamente
        this.app.use(express.urlencoded({extended: true})); // Utilizado para maior compatibilidade e transformar valores de um formulario em objetos javascript
        this.app.use(express.json()); // habilitando o json para retornamos para o front-end

    }   
}

export default new App().app;