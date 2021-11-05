const { Model, DataTypes } = require('sequelize');

class Perfil extends Model {
    static init(sequelize){
        super.init({
            email: DataTypes.STRING,
            data_nascimento: DataTypes.STRING,
            sobrenomes: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'perfis2'
        })
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
       
    }
}
module.exports = Perfil;