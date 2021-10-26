const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const User = require('../models/User');
const Cadastro_familia = require('../models/Cadastro_familia');

const connection = new Sequelize(dbConfig);

User.init(connection);
Cadastro_familia.init(connection);

User.associate(connection.models);
Cadastro_familia.associate(connection.models);

module.exports = connection;