import jwt from "jsonwebtoken";
import User from "../models/User";

// Middleware referente a verificação do JsonWebToken
export default async function loginRequired(req, res, next) {
    /*
        Este middleware recupera o Token JWT da header onde esta contido o token gerado pelo servidor e armazenado no cliente
        e logo apos a recuperação ele verifica e extrai as informações contidas neste token que no caso são email e id
        alem disto ele bloqueia o acesso da rota caso não tenha o token 
    */

    const { authorization } = req.headers; // Fazendo a req do header para extrair o token jwt
        

    if(!authorization){
        return res.status(401).json({
            errors: ['Login requerido!']
        })
    }

    // separando Bearer do token pelo split de espaço
    const [Bearer, token] = authorization.split(' ');
    

    try {
        // Verificando se o Token e valido com a variavel de ambiente
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, email } = dados; // Realizando desestruturação de objetos dos dados de identificação do user contidos no jwt

        const user = await User.findOne({ where: { id, email } }); // verifica a validade das credenciais do token com o banco de dados

        if(!user){
            return res.status(401).json({
                errors: ['Usuário inválido']
            })
        }

        // todos dados abaixo são referentes extraidos dos jwt
        req.userId = id; // Definindo o id para identificação do usuário na API via req.userId
        req.userEmail = email; // Definindo o emailpara identificação do usuário na API via req.userEmail
        next();
    } catch (error) {
        return res.status(401).json({
            errors: ['Token inválido!']
        })
    }

}