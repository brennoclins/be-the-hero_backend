const express = require('express');

//importa as regras de manipulação dos dados das ongs
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.listAll);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.listAll);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;


/**
 * Metodos HTTP
 * 
 * GET: Busca uma informação do back-end
 * POST: Cria uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Bancos de dados: 
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, MS Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Tipos de abordagem para lidar com bancos de dados SQL no JavaScript
   * Driver nativo do DB  para nodeJS: SELECT * FROM users;
   * Query Buildr: table('users').select('*').where()
   */