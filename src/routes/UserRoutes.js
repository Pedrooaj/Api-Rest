import UserController from "../controllers/UserController";
import { Router } from "express";
import loginRequired from "../middlewares/loginRequired";

const UserRoute = Router();

// rotas de users 


//UserRoute.get("/", UserController.index); // Lista usuários * Não deveriam existir em produção 
//UserRoute.get("/:id",loginRequired, UserController.show); // Lista usuário * Não deveriam existir em produção


// Necessarios em produção
UserRoute.post("/", UserController.create);  
UserRoute.put("/", loginRequired, UserController.update);
UserRoute.delete("/",loginRequired, UserController.delete);



/*
index -> lista todos usuarios - GET
store/create -> cria um novo usuario - POST
delete -> deleta um usuario - DELETE
show -> mostra um usuario - GET
update -> atualiza um usuario - PATCH ou PUT
*/

export default UserRoute;
