import Aluno from "../models/Aluno";

class AlunoController{
    async index(req,res){
        try {
            const alunos = await Aluno.findAll({ attributes: ['nome', 'sobrenome','idade','altura','peso'] });
            return res.json(alunos);
        } catch (error) {
            return res.json({
                errors: error
            })
        }
    }
    async show(req,res){
    try {
        const { id } = req.params;

        if(!id){
            return res.status(400).json({
                errors: ['Id inválido']
            })
        }

        const aluno = await Aluno.findByPk(id);

        if(!aluno){
            return res.status(400).json({
                errors: ['Aluno não existe']
            })
        }

        const { nome, sobrenome, idade, altura, peso } = aluno;

        return res.json({nome,sobrenome,idade,altura,peso});

    } catch (e) {
        return res.status(400).json({
            errors:  e.errors.map((erro) => erro.message)
        })
    }

    }
    async create(req,res){
        try {
            const aluno = await Aluno.create(req.body);
            return res.json(aluno);
        } catch (e) {
            return res.json({
                errors: e.errors.map((erro) => erro.message)
            })
        }

        
     }
    async update(req,res){
        try {
            const { id } = req.params;

            if(!id){
                return res.status(400).json({
                    errors: ['Id inválido']
                })
            }
    
            const aluno = await Aluno.findByPk(id);
    
            if(!aluno){
                return res.status(400).json({
                    errors: ['Aluno não existe']
                })
            }
    
            const newAluno = await aluno.update(req.body);
            return res.json(newAluno);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((erro) => erro.message)
            })
        }
    }
    async delete(req,res){
        try {
            const { id } = req.params;

        if(!id){
            return res.status(400).json({
                errors: ["Id inválido"]
            })
        }

        const aluno = await Aluno.findByPk(id);

        if(!aluno){
            return res.status(400).json({
                errors: ["Aluno não encontrado"]
            })
        }

        await aluno.destroy();

        return res.json({
            apagado: true
        })

        } catch (e) {
            return res.json({
                errors: e.errors.map((erro) => erro.message)
            })      
        }
        

    }
}

export default new AlunoController();