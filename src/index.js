const express = require('express');
const cors = require('cors');

//importando rotas do arquivo ROUTES.JS
const routes = require('./routes');

const app = express();

app.use(cors());

//informar ao express para usar o JSON
app.use(express.json());

//informa para o app usar as rotas
app.use(routes);

  
//escutando na porta 3333
app.listen(3333);
