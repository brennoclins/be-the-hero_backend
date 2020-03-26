
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        
        table.decimal('value').notNullable();
        
        //chave estrangeira
        table.string('ong_id').notNullable();
        //criando relacionamento do campo "ong_id" da tabela "incidents" com o campo "id" da tabela de "ongs"
        table.foreign('ong_id').references('id').inTable('ongs');

        table.timestamps();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};

/**
 * para criar o esquema das tabelas
 * npx knex migrate:make create_incidents
 */

 /**
  * para criar a tabela
  * npx knex migrate:latest
  */

  /**
   * caso tenha algum erro rode o comando
   * para disfacer a ultima migrate executada ou seja, roda o metodo DOWN e deleta a tabela
   * npx knex migrate:rollback
   */