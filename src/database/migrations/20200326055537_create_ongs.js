
// esse metodo serve para criar a tabela
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
        table.timestamps();// cria os campos `created_at` e `updated_at`
    });
  
};

//esse metodo serve para deletar a tabela caso algo de errado
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};

//no terminal rode o comando:
// npx knex migrate:latest