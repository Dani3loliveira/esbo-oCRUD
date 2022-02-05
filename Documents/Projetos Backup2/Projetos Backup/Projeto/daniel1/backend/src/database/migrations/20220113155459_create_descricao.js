
exports.up = function(knex) {
    return knex.schema.createTable('descricao', function(table){
        table.increments(); /**Cria uma primary key auto incrementavel */

        table.string('title').notNullable();
        table.string('description').notNullable();
        
        table.string('user_id').notNullable();/**armazenar quem criou description */

        table.foreign('user_id').references('id').inTable('a');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('descricao');
  
};
