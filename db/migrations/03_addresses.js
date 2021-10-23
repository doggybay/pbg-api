exports.up = function(knex) {
  return knex.schema.createTable('addresses', table => {
    table.increments();
    table.integer('customer_id').references('customer.id').notNullable().onDelete('CASCADE');
    table.string('st_address').notNullable();
    table.string('opt_address');
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.integer('zip_code').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('addresses');
};