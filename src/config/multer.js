import multer from "multer";
import { extname, resolve } from "path";

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000); // gera um número aleatorio entre 10mil e 20mil


export default { 
    // função para validar os formatos da imagem enviado
    fileFilter(request, file, callback) {
        if(file.mimetype != "image/png" && file.mimetype != "image/jpeg" && file.mimetype != 'image/jpg'){
            return callback(new multer.MulterError("Arquivo precisa Ser PNG, JPEG ou JPG"))
        }
        return callback(null, true);
    },

    // Configurando e exportando o objeto multer
    storage: multer.diskStorage({
        destination: (request, file, callback) => {
            // a função callback de destination recebe um erro e a pasta do arquivo
            callback(null, resolve(__dirname, '..', '..', 'uploads','images'));
        },
        filename: (request, file, callback) => {
            // a função callback de filename recebe o nome do arquivo e sua extensão
            callback(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`)
        }
    })
};