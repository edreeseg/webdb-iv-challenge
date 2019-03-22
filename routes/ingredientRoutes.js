const express = require('express');
const router = express.Router();
const db = require('../data/dataAccess');

router.get('/', (req, res) => {
    db.getIngredients()
        .then(ingredients => res.json({ ingredients }))
        .catch(error => res.status(500).json({ error }));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.getIngredient(id)
        .then(ingredient => {
            if (!ingredient.length) return res.status(404).json({ error: 'No ingredient found with that ID.' });
            else return res.json({ ingredient: ingredient[0] });
        })
        .catch(error => res.status(500).json({ error }));
})

module.exports = router;