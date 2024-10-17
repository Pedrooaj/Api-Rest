import Aluno from "../models/Aluno";

class AlunoController{
    async index(req,res){
        const alunos = await Aluno.findAll();
        return res.json(alunos);

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

    } catch (e) {
        return res.status(400).json({
            errors:  e.errors.map((err) => err.message)
        })
    }

    }
    async create(req,res){

    }
    async update(req,res){

    }
    async delete(req,res){

    }
}

export default new AlunoController();