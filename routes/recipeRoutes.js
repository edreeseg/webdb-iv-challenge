const express = require('express');
const router = express.Router();
const db = require('../data/dataAccess');

router.get('/', (req, res) => {
    db.getRecipes()
        .then(recipes => res.json({ recipes }))
        .catch(error => res.status(500).json({ error }));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.getRecipe(id)
        .then(recipe => res.json({ recipe }))
        .catch(error => {
            if (error === 404) return res.status(404).json({ error: 'No recipe with that ID found.' });
            else res.status(500).json({ error });
        });
});

router.post('/', (req, res) => { // Should have a way to enter ingredients - array of objects?
    const { dish_id, name, instructions } = req.body;
    if (!dish_id || !name || !instructions) return res.status(400).json({ error: 'Recipe must include dish_id, name, and instruction keys.' });
    const entry = { dish_id, name, instructions };
    db.addRecipe(entry)
        .then(id => res.status(201).json({ id }))
        .catch(error => {
            if (error.errno === 19) return res.status(400).json({ error: 'Provided dish_id does not match any currently existing dish.' });
            else res.status(500).json({ error });
        });
});

router.get('/:id/list', (req, res) => {
    const { id } = req.params;
    db.getShoppingList(id)
        .then(list => {
            if (!list.length) return res.status(404).json({ error: 'No recipe found with that ID.' });
            else return res.json({ list });
        })
        .catch(error => res.status(500).json({ error }));
});

module.exports = router;