const { Model, DataTypes } = require('sequelize');

class Parentesco extends Model {
    static init(sequelize){
        super.init({
            grau_parentesco: DataTypes.STRING, 
        }, {
            sequelize,
            tableName: 'parentesco2'
        })
    }
    static associate(models){
        this.belongsToMany(models.Familiar, {foreignKey: 'parentesco_id', through: 'familia_parentesco', as: 'membros' });
    }
}
module.exports = Parentesco;