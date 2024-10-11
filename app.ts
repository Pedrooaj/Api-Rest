import express from "express";
import routes from "./src/routes";

class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.middlewares(); // Executa todos middlewares
        this.router(); // executa a função router para chamar rotas


    }

    router(){
        this.app.use(routes);
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.json());

    }   
}

export default new App().app;