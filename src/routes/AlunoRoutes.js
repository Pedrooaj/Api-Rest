import { Router } from "express";
import AlunoController from "../controllers/AlunoController";

const AlunoRoute = Router();

AlunoRoute.get("/", AlunoController.index);
AlunoRoute.get("/create", AlunoController.create);

export default AlunoRoute;