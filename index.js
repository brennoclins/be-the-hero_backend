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

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Brenno C. Lins',
        mensagem:'Estudando na quarentena'
    });
});

app.listen(3333);
