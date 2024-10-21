import multer from "multer";
import multerConfig from "../config/multer";
import Foto from "../models/Foto";

/* Configuração do middleware multer para enviar arquivo
com o middleware(caso seja na rota) ou função(caso seja no controller) configurado ele vai esperar o nome do arquivo que vai ser enviado pelo body multipart form 
e vai fornecer um novo atributo req.file que da todos os atributos do upload do arquivo
*/

const upload = multer(multerConfig).single('foto');



class PhotoController{
    create(req, res){
        return upload(req, res, async (erro) => {
            if(erro){
                return res.status(400).json({
                    errors: [erro.code]
                })
            }
            try {
                const { originalname, filename } = req.file; // recebe a foto registrada pelo multer
                const { aluno_id } = req.body; // recebe o id do formulario
    
                const foto = await Foto.create({originalname, filename, aluno_id});
                return res.json(foto)
                
            } catch (error) {
                return res.status(401).json({
                    // erro provisorio 
                    errors: ['Aluno não existe']
                })
            }

        });
    }

}

export default new PhotoController();