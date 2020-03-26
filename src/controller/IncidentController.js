const connection = require('../database/connection');

module.exports = {
    async listAll(request, response){
        const incidents = await connection('incidents').select('*');
        
        return response.json(incidents);
    },
    //cria novo incident
    async create(request, response) {
        const {title, description, value } = request.body;
        
        //pegando a id da ong que esta logada pelo cabeçalho da requisição
        const ong_id = request.headers.authorization;

        //inserir dados no banco na tabela incident
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
    
        //resposta para o cliente
        return response.json({ id });
    },

    async delete (request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
}