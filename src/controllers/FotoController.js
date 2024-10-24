import multerConfig from "../config/multer";
import multer from "multer";
import Foto from "../models/Foto";
import fs from "fs";
import path, { resolve } from "path";

const upload = multer(multerConfig).single("foto");

class FotoController {
    async index(req,res) {
        const fotos = await Foto.findAll();
        return res.json(fotos);        
    }
    create(req,res) {
        return upload(req,res, async (error) => {
            if(error){
                return res.status(400).json({
                    errors: [error.code]
                });
            }
            try {
                const { originalname, filename } = req.file;
                const { aluno_id } = req.body;

                const foto = await Foto.create({ originalname,filename,aluno_id });
                return res.json(foto);

        
            } catch (error) {
                return res.status(400).json({
                    errors: ["Aluno não existe"]
                });

            }
        });
    }

    async delete(req, res){
        const id = req.userId;

        const foto = await Foto.findByPk(id);

        const filePath = path.join(__dirname, "..", "..","uploads","images", foto.filename);

        fs.unlink(filePath, (erro) => {
            if(erro){
                return res.status(500).json({
                    errors: ["Erro ao deletar arquivo"]
                });
            }
            
        });

        await foto.destroy();

        return res.json({
            success: true
        });

        
    }
}

export default new FotoController();
