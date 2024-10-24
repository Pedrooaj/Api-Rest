import Aluno from "../models/Aluno";

class AlunoController{
    async index(req,res){
        const alunos = await Aluno.findAll();
        res.json(alunos);
    }

    async create(req,res){
        try {
            const aluno = req.body;
            const newAluno = await Aluno.create(aluno);
            const { id, nome, sobrenome, email, idade, peso, altura } = newAluno;
            return res.json({ id,nome,sobrenome,email,idade,altura,peso });
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((erro) => erro.message)
            });
            
        }
    }

    async delete(req, res){
        try {
            const { id } = req.params;

            if(!id){
                return res.status(400).json({
                    errors: ["Id inválido"]
                });
            }
    
            const aluno = await Aluno.findByPk(id);
    
            if(!aluno){
                return res.status(400).json({
                    errors: ["Aluno inexistente"]
                });
            }
            await aluno.destroy();
            const { nome, sobrenome, email } = aluno;
            return res.json({
                id,
                nome,
                sobrenome,
                email
            });
        } catch (error) {
            console.log(error);
        }
    }

    async update(req, res){
        try {
            const { id } = req.params;
            if(!id){
                return res.status(400).json({
                    errors: ["Id inválido"]
                });
            }
    
            const aluno = await Aluno.findByPk(id);
    
            if(!aluno){
                return res.status(400).json({
                    errors: ["Aluno inválido"]
                });
            }
    
            await aluno.update(req.body);
            const { nome, sobrenome, email, idade, peso, altura } = aluno; 
            return res.json({
                id,
                nome,
                sobrenome,
                email,
                idade,
                peso,
                altura
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default new AlunoController();
