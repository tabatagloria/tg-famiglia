const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const UserController = require('./controllers/UserController');
const FamiliarController = require('./controllers/FamiliarController');
const PerfilController = require('./controllers/PerfilController');
const DocumentoController = require('./controllers/DocumentoController');
const TipoCidadaniaController = require('./controllers/TipoCidadaniaController');
const BuscaController = require('./controllers/BuscaController');


const routes = express.Router();

routes.use(morgan('dev'));
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

//Rotas de Users
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users', UserController.delete);
routes.put('/users', UserController.update);


//Rotas de Familiar
routes.get('/users/:user_id/cadastro_familia', FamiliarController.index);
routes.post('/users/:user_id/cadastro_familia', FamiliarController.store);
routes.put('/users/:user_id/cadastro_familia', FamiliarController.update);
routes.delete('/users/:user_id/cadastro_familia', FamiliarController.delete);

//Rotas Perfil
routes.get('/users/:user_id/cadastro_perfil', PerfilController.index);
routes.post('/users/:user_id/cadastro_perfil', PerfilController.store);
routes.put('/users/:user_id/cadastro_perfil', PerfilController.update);
routes.delete('/users/:user_id/cadastro_perfil', PerfilController.delete);

//Rotas Documentos
routes.get('/users/:user_id/cadastro_familia/:familiar_id/docs', DocumentoController.index);
routes.post('/users/:user_id/cadastro_familia/:familiar_id/docs', DocumentoController.store);
routes.put('/users/:user_id/cadastro_familia/:familiar_id/docs/:local_id', DocumentoController.update);
routes.delete('/users/:user_id/cadastro_familia/:familiar_id/docs', DocumentoController.delete);


//Tipo Cidadania
routes.post('/tipo_cidadania', TipoCidadaniaController.store);

//Busca
routes.get('/busca', BuscaController.show);

//CORS
routes.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Acces-Control-Allow-Header', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );

    if( req.method === 'OPTIONS') {
        res.headers('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();

    routes.use((req, res, next) => {
        const erro = new Error('Não encontrado');
        erro.status = 404;
        next(erro);
    });
    
    routes.use((error, req, res, next) => {
        res.status(error.status || 500);
        return res.send({ 
            erro: {
                mensagem: error.message
            }
         });
    });
});

module.exports = routes;