exports.up = function(knex) {
  return knex.schema.createTable('orders', table => {
    table.increments();
    table.integer('customer_id').notNullable();
    table.integer('plate_id').notNullable();
    table.integer('total').notNullable();
    table.integer('quantity').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
