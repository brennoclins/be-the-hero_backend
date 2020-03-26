const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

//rota para criar as ongs
routes.post('/ongs', (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    console.log(data);
    return response.json();
});

// exporto todas as rotas
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