import PhotoController from "../controllers/PhotoController";
import { Router } from "express";
import multer from "multer";
import multerConfig from "../config/multer";

// Configuração do middleware multer para enviar arquivo
// com o middleware configurado ele vai esperar o nome do arquivo que vai ser enviado pelo body multipart form 
const upload = multer(multerConfig);

const PhotoRoute = Router();

PhotoRoute.post('/', upload.single('foto') ,PhotoController.create);

export default PhotoRoute;