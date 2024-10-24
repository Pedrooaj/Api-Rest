import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: "",
                validate: {
                    len: {
                        // args e referente a quantidade minima e maxima de caracteres
                        args: [3,255],
                        msg: "Nome precisa ter entre 3 e 255 caracteres"
                    }
                }
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: "",
                validate: {
                    len: {
                        args: [3,255],
                        msg: "Nome precisa ter entre 3 e 255 caracteres"
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: "",
                unique: {
                    msg: "Este email ja existe por favor use outro!"
                },
                validate: {
                    isEmail: {
                        msg: "E-mail Inválido"
                    }
                }
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: "",
                validate: {
                    isInt: {
                        msg: "Idade precisa ser um número inteiro"
                    }
                }
            },
            peso: {
                type: Sequelize.FLOAT,
                defaultValue: "",
                validate: {
                    isFloat: {
                        msg: "Peso precisa ser um número inteiro ou de ponto flutuante"
                    }
                }
            },
            altura: {
                type: Sequelize.FLOAT,
                defaultValue: "",
                validate: {
                    isFloat: {
                        msg: "Altura precisa ser um número inteiro ou de ponto flutuante"
                    }
                }

            }
        }, {
            sequelize
        });
        return this;
    }

    static associate(models){
        // declarando que aluno tem varias fotos 
        this.hasMany(models.Foto, { foreignKey: 'aluno_id' })
    }

}