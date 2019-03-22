
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, dish_id: 1, name: 'Chicken Recipe 1', instructions: 'placeholder text1' },
        { id: 2, dish_id: 1, name: 'Chicken Recipe 2', instructions: 'placeholder text2' },
        { id: 3, dish_id: 2, name: 'Cookie Recipe 1', instructions: 'placeholder text3' },
        { id: 4, dish_id: 2, name: 'Cookie Recipe 2', instructions: 'placeholder text4' },
      ]);
    });
};
