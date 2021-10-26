const { Model, DataTypes } = require('sequelize');

class Cadastro_familia extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            parentesco: DataTypes.STRING,
            data_nascimento: DataTypes.DATE,
            local_nascimento: DataTypes.STRING,
            casado: DataTypes.STRING,
            nome_conjuge: DataTypes.STRING,
            data_casamento: DataTypes.DATE,
            local_casamento: DataTypes.STRING,
            falecido: DataTypes.STRING,
            data_obito: DataTypes.DATE,
            local_obito: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }) //o relacionamento pertencence a... torna único cada relacionamento

    }

}

module.exports = Cadastro_familia;