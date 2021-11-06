const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Familiar = require('../models/Familiar');
const Perfil = require('../models/Perfil');
const Documento = require('../models/Documento');

const connection = new Sequelize(dbConfig);

User.init(connection);
Familiar.init(connection);
Perfil.init(connection);
Documento.init(connection);

User.associate(connection.models);
Familiar.associate(connection.models);
Perfil.associate(connection.models);
Documento.associate(connection.models);


module.exports = connection;