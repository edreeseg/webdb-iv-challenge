
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();
    tbl
        .integer('dish_id')
        .notNullable()
        .references('id')
        .inTable('dishes');
    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
