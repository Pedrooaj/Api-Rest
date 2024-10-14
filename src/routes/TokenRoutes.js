import { Router } from "express";
import TokenController from "../controllers/TokenController";


const TokenRoute = Router();

TokenRoute.post("/", TokenController.create);

export default TokenRoute;