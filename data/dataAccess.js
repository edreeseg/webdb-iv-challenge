const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,
};

function getDishes() {
    return db('dishes');
}

function addDish(dish){
    return db('dishes')
        .insert(dish)
        .then(res => res)
};

function getDish(id){
    return new Promise(async (resolve, reject) => {
        try {
            const dish = (await db('dishes').where({ id }))[0]; // There must be a cleaner way to do this
            if (!dish) reject(404); 
            const recipes = await db('recipes').where({ dish_id: id });
            resolve({...dish, recipes});
        } catch {
            reject(500);
        }
    });
};

function getRecipes(){ // Should include dish they belong to
    return db('recipes');
};

function addRecipe(recipe){
    return db('recipes')
        .insert(recipe)
        .then(res => res);
};