const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize
        })
    }    
    static associate(models) {
        this.hasMany(models.Cadastro_familia, { foreignKey: 'user_id', as: 'cadastros_familia' }) 

    }
}

module.exports = User;

