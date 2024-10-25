/* eslint-disable no-undef */
import multerConfig from "../config/multer";
import multer from "multer";
import Foto from "../models/Foto";
import Aluno from "../models/Aluno"
import fs from "fs";
import { resolve } from "path";


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

                const foto = await Foto.create({ originalname, filename, aluno_id });
                return res.json(foto);

        
            } catch (error) {
                return res.status(400).json({
                    errors: ["Aluno não existe"]
                });

            }
        });
    }

    async delete(req, res){
        try {
            const { id } = req.body;

            if(!id){
                return res.status(400).json({
                    error: ['Id inválido']
                })
            }

            const aluno = await Aluno.findOne({
                where: { id },
                attributes: ['id', 'nome', 'sobrenome', 'email'],
                order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
                include: {
                    model: Foto,
                }
            })
    
            const foto = aluno.Fotos.shift();
    
            const { filename } = foto;
            const filePath = resolve(__dirname, "..", "..", 'uploads', 'images', filename);
    
    
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
    
        } catch (error) {
            return res.status(400).json({
                errors: ["Não há fotos na galeria deste aluno"]
            })
        }
        
        
    }
}

export default new FotoController();
