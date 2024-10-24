import multer from "multer";
import { extname, resolve } from "path";

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);


export default {
    fileFilter(request, file, callback){
        if(file.mimetype != "image/png" && file.mimetype != "image/jpeg" && file.mimetype != "image/jpg"){
            return callback(new multer.MulterError("Arquivo precisa ser PNG,JPEG ou JPG"));
        }
        return callback(null, true);
    },
    storage: multer.diskStorage({
        destination: (request, file, callback) => {
            callback(null, resolve(__dirname, "..","..","uploads","images"));
        },
        filename: (request, file, callback) => {
            callback(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
        }
    })
};
