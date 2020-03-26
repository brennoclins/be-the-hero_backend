//importando para conexão com o banco de dados
const connection = require('../database/connection');

//usado para gerar a id de cada ong
const crypto = require('crypto');

module.exports = {
    //lista todas as ongs 
    async listAll(request, response){
        const ongs = await connection('ongs').select('*');
        
        //resposta para o clinte
        return response.json(ongs);
    },
    //cria nova ong
    async create(request, response) {
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
        }
}