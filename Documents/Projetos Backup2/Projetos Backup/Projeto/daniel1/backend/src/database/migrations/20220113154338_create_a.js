
exports.up = function(knex) {
    return knex.schema.createTable('a', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('lastname').notNullable();
        table.string('email').notNullable();
        table.string('senha').notNullable();
        table.string('whatsapp',11).notNullable();
        table.string('birthday').notNullable();
        table.string('cep', 8).notNullable();
        table.string('observacao').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('a');
  
};
