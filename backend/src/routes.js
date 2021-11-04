const express = require('express');
const UserController = require('./controllers/UserController');
const FamiliarController = require('./controllers/FamiliarController');


const routes = express.Router();

//Rotas de Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users', UserController.delete);
routes.put('/users', UserController.update);


//Rotas de Familiar
routes.get('/users/:user_id/cadastro_familia', FamiliarController.index);
routes.post('/users/:user_id/cadastro_familia', FamiliarController.store);
routes.put('/users/:user_id/cadastro_familia', FamiliarController.update);




module.exports = routes;