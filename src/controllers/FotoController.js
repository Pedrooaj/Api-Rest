import multerConfig from "../config/multer";
import multer from "multer";

const upload = multer(multerConfig).single('foto');

class FotoController {
    index(req,res) {
        return upload(req,res, async (error) => {
            if(error){
                return res.status(400).json({
                    errors: [error.code]
                })
            }
            try {
                const { originalname, filename } = req.file;
                const { aluno_id } = req.body;

                

                
                
            } catch (error) {
                
            }
        })
    }
}