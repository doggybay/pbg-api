exports.up = function(knex) {
  return knex.schema.createTable('plates', table => {
    table.increments();
    table.string('name').notNullable();
    table.text('description').notNullable();
    table.string('picture').notNullable();
    table.float('price');
    table.timestamps(true, true);
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('plates')
};
