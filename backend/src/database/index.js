const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Familiar = require('../models/Familiar');

const connection = new Sequelize(dbConfig);

User.init(connection);
Familiar.init(connection);

Familiar.associate(connection.models);


module.exports = connection;