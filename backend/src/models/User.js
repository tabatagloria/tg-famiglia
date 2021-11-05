const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            user_name: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Familiar, { foreignKey: 'user_id', as: 'familiares' });
        this.hasOne(models.Perfil, { foreignKey: 'user_id', as: 'perfil' });
    }
}
module.exports = User;