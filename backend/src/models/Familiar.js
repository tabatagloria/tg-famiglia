const { Model, DataTypes } = require('sequelize');

class Familiar extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING, 
            data_nascimento: DataTypes.STRING, 
            casado: DataTypes.STRING, 
            data_casamento: DataTypes.STRING, 
            falecido: DataTypes.STRING, 
            data_obito: DataTypes.STRING, 
        }, {
            sequelize,
            tableName: 'familiares2'
        })
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsToMany(models.Documento, {foreignKey: 'familiar_id', through: 'familia_docs', as: 'documentos' });
    }
}
module.exports = Familiar;