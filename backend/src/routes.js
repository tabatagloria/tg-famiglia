const express = require('express');
const UserController = require('./controllers/UserController');


const routes = express.Router();

routes.get('/users/', UserController.index);
routes.post('/users/', UserController.store);
routes.delete('/users', UserController.delete);
routes.put('/users', UserController.update);


module.exports = routes;