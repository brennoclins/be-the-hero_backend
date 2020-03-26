
// esse metodo serve para criar a tabela
exports.up = function(knex) {
    knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullabçe();
        table.string('whatsapp').notNullabçe();
        table.string('city').notNullabçe();
        table.string('uf', 2).notNullabçe();
        table.timestamps();// cria os campos `created_at` e `updated_at`
    });
  
};

//esse metodo serve para deletar a tabela caso algo de errado
exports.down = function(knex) {
    knex.schema.dropTable('ongs')
};
