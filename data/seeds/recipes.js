
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, dish_id: 1 },
        { id: 2, dish_id: 1 },
        { id: 3, dish_id: 2 },
        { id: 4, dish_id: 2 },
      ]);
    });
};
