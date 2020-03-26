const express = require('express');
const crypto = require('crypto');

//importando para conexão com o banco de dados
const connection = require('./database/connection');

const routes = express.Router();

//rota para criar as ongs
routes.post('/ongs', async (request, response) => {
    const { name, email, whatsapp, city, uf } = request.body;
    //gera a id da ONG
    const id = crypto.randomBytes(4).toString('HEX');

    //inserir dados no banco na tabela ongs
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });
    

    //resposta para o cliente
    return response.json({ id });
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