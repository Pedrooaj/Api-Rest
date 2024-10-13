import UserController from "../controllers/UserController";
import { Router } from "express";

const UserRoute = Router();

// rotas de users
UserRoute.post("/", UserController.create);



/*
index -> lista todos usuarios - GET
store/create -> cria um novo usuario - POST
delete -> deleta um usuario - DELETE
show -> mostra um usuario - GET
update -> atualiza um usuario - PATCH ou PUT
*/

export default UserRoute;