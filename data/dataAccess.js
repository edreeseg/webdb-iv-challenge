const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
  getShoppingList,
  getRecipe,
  getIngredients,
  getIngredient,
  addIngredient,
};

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .then(res => res[0])
    .catch(error => error);
}

function getDish(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const dish = (await db('dishes').where({ id }))[0]; // There must be a cleaner way to do this
      if (!dish) reject(404);
      const recipes = await db('recipes').where({ dish_id: id });
      resolve({ ...dish, recipes });
    } catch (e) {
      reject(500);
    }
  });
}

function getRecipes() {
  return new Promise(async (resolve, reject) => {
    try {
      const recipes = await db('recipes');
      const dishes = await db('dishes');
      resolve(
        recipes.map(entry => {
          return {
            ...entry,
            dish: dishes.find(dish => dish.id === entry.dish_id),
          };
        })
      );
    } catch (e) {
      reject(500);
    }
  });
}

function getRecipe(id) {
  // This needs refactoring
  return new Promise(async (resolve, reject) => {
    try {
      let meal = await db
        .select(
          'recipes.name AS recipe_name',
          'dishes.name AS dish_name',
          'recipes.id AS recipe_id'
        )
        .from('recipes')
        .where({ 'recipes.id': id })
        .innerJoin('dishes', 'dish_id', 'dishes.id');
      meal = meal[0];
      const ingredients = await db
        .select('ingredients.name', 'quantity', 'unit')
        .from('recipesingredients')
        .where({ recipe_id: meal.recipe_id })
        .innerJoin('ingredients', 'ingredient_id', 'ingredients.id');
      meal.ingredients = ingredients;
      delete meal.recipe_id;
      resolve(meal);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(res => res[0])
    .catch(error => error);
}

function getShoppingList(id) {
  return db
    .select('name', 'quantity', 'unit')
    .from('recipesingredients')
    .where({ recipe_id: id })
    .innerJoin('ingredients', 'ingredient_id', 'ingredients.id');
}

function getIngredients() {
  return db('ingredients');
}

function getIngredient(id) {
  return db('ingredients').where({ id });
}

function addIngredient(ing) {
  return db('ingredients')
    .insert(ing)
    .then(res => res[0])
    .catch(err => err);
}
