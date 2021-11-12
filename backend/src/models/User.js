const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            user_name: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize,
            instanceMethods: {
                generateHash(password) {
                    return bcrypt.hash(password, bcrypt.genSaltSync(8));
                },
                validPassword(password) {
                    return bcrypt.compare(password, this.password);
                }
            }
        })
    }
    static associate(models){
        this.hasMany(models.Familiar, { foreignKey: 'user_id', as: 'familiares' });
        this.hasOne(models.Perfil, { foreignKey: 'user_id', as: 'perfil' });
    }
}
module.exports = User;