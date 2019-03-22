
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipesingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipesingredients').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 3.00, unit: 'lbs' },
        { recipe_id: 1, ingredient_id: 2, quantity: 3.00, unit: 'cups' },
        { recipe_id: 1, ingredient_id: 3, quantity: 2.00, unit: 'large eggs' },
        { recipe_id: 1, ingredient_id: 7, quantity: 10.00, unit: 'tsp' },
        { recipe_id: 1, ingredient_id: 8, quantity: 3.00, unit: 'tsp' },
        { recipe_id: 1, ingredient_id: 9, quantity: 10.00, unit: 'tsp' },
        { recipe_id: 1, ingredient_id: 15, quantity: 3.00, unit: 'cups' },
        { recipe_id: 3, ingredient_id: 2, quantity: 3.00, unit: 'cups' },
        { recipe_id: 3, ingredient_id: 3, quantity: 2.00, unit: 'large eggs' },
        { recipe_id: 3, ingredient_id: 4, quantity: 0.75, unit: 'cups' },
        { recipe_id: 3, ingredient_id: 5, quantity: 0.75, unit: 'cups' },
        { recipe_id: 3, ingredient_id: 9, quantity: 1.00, unit: 'tsp' },
        { recipe_id: 3, ingredient_id: 10, quantity: 0.75, unit: 'cups' },
        { recipe_id: 3, ingredient_id: 11, quantity: 0.75, unit: 'cups' },
        { recipe_id: 3, ingredient_id: 12, quantity: 1.00, unit: 'tsp' },
        { recipe_id: 3, ingredient_id: 13, quantity: 1.00, unit: 'tsp' },
        { recipe_id: 3, ingredient_id: 14, quantity: 1.00, unit: '12 oz. package' },
        { recipe_id: 2, ingredient_id: 1, quantity: 2.00, unit: 'lbs' },
        { recipe_id: 2, ingredient_id: 2, quantity: 2.00, unit: 'cups' },
        { recipe_id: 2, ingredient_id: 7, quantity: 12.00, unit: 'tsp' },
        { recipe_id: 2, ingredient_id: 8, quantity: 6.00, unit: 'tsp' },
        { recipe_id: 2, ingredient_id: 9, quantity: 12.00, unit: 'tsp' },
        { recipe_id: 2, ingredient_id: 15, quantity: 2.00, unit: 'cups' },
        { recipe_id: 2, ingredient_id: 6, quantity: 1.00, unit: 'tsp' },
        { recipe_id: 4, ingredient_id: 2, quantity: 2.50, unit: 'cups' },
        { recipe_id: 4, ingredient_id: 3, quantity: 3.00, unit: 'large eggs' },
        { recipe_id: 4, ingredient_id: 4, quantity: 0.75, unit: 'cups' },
        { recipe_id: 4, ingredient_id: 5, quantity: 0.75, unit: 'cups' },
        { recipe_id: 4, ingredient_id: 9, quantity: 0.75, unit: 'tsp' },
        { recipe_id: 4, ingredient_id: 10, quantity: 1.50, unit: 'cups' },
        { recipe_id: 4, ingredient_id: 12, quantity: 1.25, unit: 'tsp' },
        { recipe_id: 4, ingredient_id: 13, quantity: 1.00, unit: 'tsp' },
        { recipe_id: 4, ingredient_id: 14, quantity: 1.00, unit: '12 oz. package' },

      ]);
    });
};
