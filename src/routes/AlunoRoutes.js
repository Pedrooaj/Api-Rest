import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const AlunoRoute = Router();

AlunoRoute.get("/", AlunoController.index);
AlunoRoute.get("/:id", AlunoController.show);
AlunoRoute.post("/", AlunoController.create);
AlunoRoute.delete("/", AlunoController.delete);
AlunoRoute.put("/", AlunoController.update);

export default AlunoRoute;