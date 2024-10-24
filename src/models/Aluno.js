import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: ""
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: ""
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: "",
                unique: {
                    msg: "Email já existe"
                },
                validate: {
                    isEmail: {
                        msg: "Email Inválido"
                    }
                }
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
                validate: {
                    isInt: {
                        msg: "Idade Necessita ser preenchido com um numero inteiro"
                    }
                }
            },
            peso: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                validate: {
                    isFloat: {
                        msg: "Peso Necessita ser preenchido!"
                    }
                }
            },
            altura: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                validate: {
                    isFloat: {
                        msg: "Altura Necessita ser preenchido!"
                    }
                }
            }
        }, {
            sequelize
        });
        return this;
    }


}
