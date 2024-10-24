import FotoController from "../controllers/FotoController";
import { Router } from "express";
import loginRequired from "../middlewares/loginRequired";

const FotoRoute = Router();

FotoRoute.post("/", loginRequired, FotoController.create);
FotoRoute.delete("/",loginRequired ,FotoController.delete);
FotoRoute.get("/", loginRequired, FotoController.index);

export default FotoRoute;
