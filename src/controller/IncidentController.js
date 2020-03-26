const connection = require('../database/connection');

module.exports = {
    async listAll(request, response){
        //se page não existi o valor de page vai ser 1
        const { page = 1 } = request.query;

        //pegando o total de registro na tabela
        const [count] = await connection('incidents').count();

        //listando registro com paginação
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')//juntando duas tabelas
            .limit(5) //limita para 5 o numero de registros listados
            .offset((page - 1) * 5)// pula pagina de 5 em 5 registro
            .select([
                'incidents.*', //pega todos os campos da tabela incidents
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        
        response.header('X-Total-Count', count['count(*)']);

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