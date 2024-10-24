import Sequelize, { Model } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export default class Foto extends Model{
    static init(sequelize){
        super.init({
            originalname: {
                type: Sequelize.STRING,
                defaultValue: "",
                validate: {
                    notEmpty: {
                        msg: "Campo não pode ficar vazio"
                    }
                }
            },
            filename: {
                type: Sequelize.STRING,
                defaultValue: "",
                validate: {
                    notEmpty: {
                        msg: "Campo não pode ficar vazio"
                    }
                }
            },
            url: {
                type: Sequelize.VIRTUAL,
                // realizando o get para obter o value/nome da foto e setando a url virtual com a variavel de ambiente 
                get(){
                    return `${process.env.URL_UPLOADS}/images/${this.getDataValue("filename")}`;
                }
            }
        },{
            sequelize,
            tableName: "fotos"
        });
        return this;
    }

    /*static associate(models){
        Referenciando que o model Foto pertence a um aluno com a foreingKey
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' }); 
    }*/
}
