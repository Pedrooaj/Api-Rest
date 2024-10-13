import express from "express";
import HomeRoute from "./routes/HomeRoutes";
import UserRoute from "./routes/UserRoutes";
import dotenv from "dotenv";
dotenv.config();

import "./database"; // Importando arquivo que contem a conexão com o banco de dados e Models



class App {

    constructor(){
        this.app = express();
        this.middlewares(); // Executa todos middlewares
        this.router(); // executa a função router para chamar rotas
    }

    router(){
        this.app.use("/", HomeRoute);
        this.app.use("/users", UserRoute);
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());

    }   
}

export default new App().app;