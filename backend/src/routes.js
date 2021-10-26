const express = require('express');
const UserController = require('./controllers/UserController');
const CadastroFamiliaController = require('./controllers/CadastroFamiliaController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/cadastro_familia', CadastroFamiliaController.index);
routes.post('/users/:user_id/cadastro_familia', CadastroFamiliaController.store);
routes.delete('/users/:user_id/cadastro_familia', CadastroFamiliaController.store);

module.exports = routes;