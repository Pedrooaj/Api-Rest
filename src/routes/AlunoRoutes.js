import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const AlunoRoute = Router();

AlunoRoute.get("/", AlunoController.index);
AlunoRoute.post("/", AlunoController.create);
AlunoRoute.delete("/:id", AlunoController.delete);
AlunoRoute.put("/:id", AlunoController.update);

export default AlunoRoute;