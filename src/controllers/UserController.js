import User from "../models/User";

class UserController{
    // Index -> lista todos usuarios - GET
    async index(req, res){
        try {
            const Users = await User.findAll();
            return res.json(Users);
        } catch (error) {
            return res.json(null)
        }

    }
    // Create/Store -> cria um novo usuario - POST
   async create(req, res){
    try {
        const novoUser = await User.create(req.body);
        return res.json(novoUser);
    } catch (e) {
        return res.status(400).json({errors: e.errors.map((erro) => erro.message)})
    }
   }
    // Show -> mostra um usuario - GET
    async show(req,res){
        try {
            const user = await User.findByPk(req.params.id);
            if(user){
                return res.json({user});
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
            if(!req.params.id){
                return res.status(400).json({errors: ['Id não enviado']})
            }
            const user = await User.findByPk(req.params.id);
            if(!user){
                return res.status(400).json({errors: ['Usuário não existe']})
            }
            
            const newUser = await user.update(req.body)
            return res.json({user: newUser})
        } catch (e) {            
          return res.json({errors: e.errors.map((erro) => erro.message)})
        }
    }

    // Delete -> deleta um usuario - DELETE
    async delete(req,res){
        try {
            if(!req.params.id){
                return res.json({
                    errors: ["Id não enviado"]
                })
            }

            const user = await User.findByPk(req.params.id);

            if(!user){
                return res.json({
                    errors: ["Usuário não existe"]
                })
            }

            await user.destroy();
            return res.json(user)
            
        } catch (e) {
            console.log(e);
            
        }
    }
}

export default new UserController(); // Exportando uma classe ja instanciada