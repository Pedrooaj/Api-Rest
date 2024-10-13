import Sequelize, { Model }  from "sequelize";
import bcryptjs from "bcryptjs"

export default class User extends Model{
    static init(sequelize){
        /* Neste campo nois utilizamos a função pai do Model init para realizar a criação do model e estruturamos o model.
           Alem disto entramos com um parametro sequelize que se refere a conexão do banco de dados.
           A estruturação de model e feita conforme o validator e chamando sequelize para definirmos o tipo do atributo
           Utilizamos validações como o validate e unique. e passamos mensagens para serem retornadas via json
        */
        super.init({
            nome: {
            type: Sequelize.STRING,
            defaultValue: "",
            validate: {
                len: {
                    args: [4,255],
                    msg: "Campo nome deve ter entre 3 e 255 caracteres"
                }
            }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: "",
                unique: {
                    msg: "Email já existe"
                },
                validate: {
                    isEmail: {
                        msg: "Email Invalido"
                    }
                    
                }
                },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: "",
                },
            password: {
                // Utilizamos o tipo virtual pois esta senha e apenas temporaria e vamos enviar apenas o hash para o banco de dados
                type: Sequelize.VIRTUAL,
                defaultValue: "",
                validate: {
                    len: {
                        args: [6,50],
                        msg: "Senha deve ter entre 6 e 50 caracteres"
                    }
                }
                }
        }, {
            sequelize
        });
        this.addHook('beforeSave', async (user) => { 
            // Verifica se há uma senha para fazer o hash se não ele realiza o hash
            if(user.password){
            user.password_hash = await bcryptjs.hash(user.password, 8); // realiza o hash da senha com 8 de salt
            }
        })
        return this;
    }
}