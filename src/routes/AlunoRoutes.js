import { Router } from "express";
import AlunoController from "../controllers/AlunoController";
import loginRequired from "../middlewares/loginRequired";

const AlunoRoute = Router();

AlunoRoute.get("/", AlunoController.index);
AlunoRoute.post("/", loginRequired,AlunoController.create);
AlunoRoute.delete("/:id", loginRequired, AlunoController.delete);
AlunoRoute.put("/:id", loginRequired,AlunoController.update);

export default AlunoRoute;