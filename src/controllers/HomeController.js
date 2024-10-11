import Aluno from "../models/Aluno.js";

class HomeController{
    async index(req, res){
        const novoAluno = await Aluno.create({
            nome: "Pedroo",
            sobrenome: "Lemos",
            email: "pedroasad@gmail.com",
            idade: 25,
            peso: 80,
            altura: 1.80,

        })
        res.json(novoAluno);
    }
}

export default new HomeController(); // Exportando uma classe ja instanciada