const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send('Hello World Brenno!');
});

app.listen(3333);
