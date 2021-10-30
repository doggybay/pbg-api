
exports.up = function(knex) {
  return knex.schema.createTable('customers', table => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email');
    table.string('phone').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('customers');
};
