import Aluno from "../models/Aluno";

class AlunoController{
    async index(req,res){
        const Users = await Aluno.findAll();
        res.json(Users);
    }

    async create(req,res){
        const user = await Aluno.create({
            nome: "Pedro",
            sobrenome: "Lemoos",
            email: "pedroo@gmaillll.com",
            idade: 18,
            peso: 60.0,
            altura: 1.70
        });
        return res.json(user);
    }
}

export default new AlunoController();