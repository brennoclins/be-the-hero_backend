const express = require('express');

const app = express();

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
 * Request Body: 
 */

app.get('/users', (request, response) => {
    const params = request.query;
    console.log(params);

    return response.json({
        evento: 'Ola! Semana OmniStack 11.0',
        aluno: 'Brenno C. Lins',
        mensagem:'Estudando na quarentena'
    });
});

app.post('/users', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Brenno C. Lins'
    });
});

app.listen(3333);
