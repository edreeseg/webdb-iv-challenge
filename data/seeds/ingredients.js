
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'Chicken' },
        { id: 2, name: 'Flour' },
        { id: 3, name: 'Eggs' },
        { id: 4, name: 'Sugar' },
        { id: 5, name: 'Brown Sugar' },
        { id: 6, name: 'Poultry Seasoning' },
        { id: 7, name: 'Paprika' },
        { id: 8, name: 'Pepper' },
        { id: 9, name: 'Salt' },
        { id: 10, name: 'Butter' },
        { id: 11, name: 'Shortening' },
        { id: 12, name: 'Vanilla' },
        { id: 13, name: 'Baking Soda' },
        { id: 14, name: 'Chocolate Chips' },
        { id: 15, name: 'Olive Oil' },
      ]);
    });
};
