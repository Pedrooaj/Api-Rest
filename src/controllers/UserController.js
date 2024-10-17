import User from "../models/User";

class UserController{
    // Index -> lista todos usuarios - GET
    async index(req, res){
        try {
            /* findAll serve para retornar todos itens da tabela 
            attributes serve para especificar os atributos a serem retornados */
            const Users = await User.findAll({ attributes: ['id', 'nome', 'email']});
            return res.json(Users);
        } catch (error) {
            return res.json(null)
        }

    }
    // Create/Store -> cria um novo usuario - POST
   async create(req, res){
    try {
        const novoUser = await User.create(req.body); // Cria um novo usuario na tabela
        const { id, nome, email } = novoUser;
        return res.json({
            id,
            nome,
            email
        });
    } catch (e) {
        return res.status(400).json({errors: e.errors.map((erro) => erro.message)})
    }
   }
    // Show -> mostra um usuario - GET
    async show(req,res){
        try {
            const user = await User.findByPk(req.params.id); // Acha um user com base na primary Key
            if(user){
                return res.json({
                    id: user.id,
                    nome: user.nome,
                    email: user.email,

                });
            }else{
                return res.json({erros: ['Usuário não existe']})
            }
        } catch (e) {
            return res.json({errors: e.errors.map((erro) => erro.message)});
        }

    }
    // Update -> atualiza um usuario - PATCH ou PUT
    async update(req,res){
        try {
            if(!req.userId){
                return res.status(400).json({errors: ['Id não enviado']})
            }
            const user = await User.findByPk(req.userId); 
            if(!user){
                return res.status(400).json({errors: ['Usuário não existe']})
            }
            
            const newUser = await user.update(req.body); // Atualiza o usuario com base nas informações do body

            const { id, nome, email } = newUser;

            return res.json({
                id,
                nome,
                email
            })
        } catch (e) {            
          return res.json({errors: e.errors.map((erro) => erro.message)})
        }
    }

    // Delete -> deleta um usuario - DELETE
    async delete(req,res){
        try {
            if(!req.userId){
                return res.json({
                    errors: ["Id não enviado"]
                })
            }

            const user = await User.findByPk(req.userId); 

            if(!user){
                return res.json({
                    errors: ["Usuário não existe"]
                })
            }

            await user.destroy(); // Deleta usuario da base de dados
            const { id, nome, email } = user;
            return res.json({
                id,
                nome, email
            });
            
        } catch (e) {
            console.log(e);
            
        }
    }
}

export default new UserController(); // Exportando uma classe ja instanciada