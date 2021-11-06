const { Model, DataTypes } = require('sequelize');

class Documento extends Model {
    static init(sequelize){
        super.init({
            local: DataTypes.STRING, 
        }, {
            sequelize,
            tableName: 'docs2'
        })
    }
    static associate(models){
       this.belongsToMany(models.Familiar, {foreignKey: 'documentos_id', through: 'familia_docs', as: 'cadastro' });
    }
}
module.exports = Documento;