exports.up = function(knex) {
  return knex.schema.createTable('plates', table => {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('picture').unique().notNullable();
    table.integer('price').unique();
    table.timestamps(true, true);
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('plates')
};
