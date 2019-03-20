
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipesingredients', tbl => {
    tbl
        .integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes');
    tbl
        .integer('ingredient_id')
        .notNullable()
        .references('id')
        .inTable('ingredients');
    tbl.float('quantity').notNullable();
    tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipesingredients');
};
