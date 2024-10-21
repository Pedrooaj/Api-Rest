import PhotoController from "../controllers/PhotoController";
import { Router } from "express";
import loginRequired from "../middlewares/loginRequired"


const PhotoRoute = Router();

PhotoRoute.post('/', loginRequired,PhotoController.create);

export default PhotoRoute;