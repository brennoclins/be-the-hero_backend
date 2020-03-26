const express = require('express');

const app = express();

//informar ao express para usar o JSON
app.use(express.json());

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
  
app.get('/users/:id', (request, response) => {
    const params = request.params;
    console.log(params);

    return response.json({
        evento: 'Ola! Semana OmniStack 11.0',
        aluno: 'Brenno C. Lins',
        mensagem:'Route Params'
    });
});

app.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Brenno C. Lins'
    });
});

app.listen(3333);
