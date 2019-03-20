
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
