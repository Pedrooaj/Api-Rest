import User from "../models/User";
import jwt from "jsonwebtoken";

// Este controller e responsavel pela criação do token JWT verificando com o banco de Dados a validade dos dados do usuario.
class TokenController{
    async create(req, res){

        // aqui recebemos do body email e senha para fazermos a validação com o banco de dados nas proximas linhas
        const { email = '', password = '' } = req.body;

        if(!email || !password){
            return res.status(401).json({
                errors: ['Preencha todos os campos!']
            })
        }

        // buscando user no banco de dados conforme o email recebido via body
        const user = await User.findOne({ where: { email } })
    
        if(!user){
            return res.status(401).json({
                errors: ["Usuário não existe"]
            })
        }
        
        /* 
        Verificando se a senha esta correta desfazendo o hash pelo metodo da Classe User utilizando bcryptjs, 
        para efetuar a criação do Token 
        */
        if(!(await user.passwordIsValid(password))){
            return res.status(401).json({
                errors: ['Senha invalida']
            })
        }

        const { id } = user; // removendo o id do user contido no banco de dados para identificação
        // realizando passo para criação do token, e armazenando o id e email como dados de identificação
        const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET,{
            expiresIn: process.env.TOKEN_EXPIRATION
        })

        return res.json({token})
    }
}

export default new TokenController(); // Exportando uma classe ja instanciada