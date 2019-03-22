const express = require('express');
const router = express.Router();
const db = require('../data/dataAccess');

router.get('/', (req, res) => {
    db.getDishes()
        .then(dishes => res.json({ dishes }))
        .catch(error => res.status(500).json({ error }));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.getDish(id)
        .then(dish => res.json({ dish }))
        .catch(error => {
            if (error === 404) return res.status(404).json({ error: 'No dish with that ID was found.' });
            else res.status(500).json({ error });
        })
});

router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'New dish must have a name key.' });
    db.addDish({ name })
        .then(id => res.status(201).json({ id }))
        .catch(error => res.status(500).json({ error }));
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.deleteDish(id)
        .then(deleted => {
            if (deleted) return res.send({ deleted });
            else return res.status(404).json({ error: 'No dish with that ID found.' });    
        })
        .catch(error => res.status(500).json({ error }));
});

module.exports = router;