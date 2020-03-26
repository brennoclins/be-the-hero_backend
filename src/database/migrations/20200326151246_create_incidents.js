
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullabçe();
        
        table.decimal('value').notNullabçe();
        
        //chave estrangeira
        table.string('ong_id').notNullabçe();
        //criando relacionamento do campo "ong_id" da tabela "incidents" com o campo "id" da tabela de "ongs"
        table.foreign('ong_id').references('id').inTable('ongs');

        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidentes');
};

/**
 * para criar o esquema das tabelas
 * npx knex migrate:make create_incidents
 */

 /**
  * para criar a tabela
  * npx knex migrate:latest
  */