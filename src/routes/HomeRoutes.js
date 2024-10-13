import HomeController from "../controllers/HomeController";
import { Router } from "express";

const HomeRoute = Router();

HomeRoute.get("/", HomeController.index);


/*
index -> lista toda tabela - GET
store/create -> cria um novo usuario - POST
delete -> deleta um usuario - DELETE
show -> mostra um usuario - GET
update -> atualiza um usuario - PATCH ou PUT
*/

export default HomeRoute;