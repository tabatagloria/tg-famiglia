const { Model, DataTypes } = require('sequelize');

class Familiar extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING, 
            parentesco: DataTypes.STRING, 
            data_nascimento: DataTypes.STRING, 
            casado: DataTypes.STRING, 
            data_casamento: DataTypes.STRING, 
            falecido: DataTypes.STRING, 
            data_obito: DataTypes.STRING, 
        }, {
            sequelize,
            tableName: 'familiares_cadastro'
        })
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
}
module.exports = Familiar;