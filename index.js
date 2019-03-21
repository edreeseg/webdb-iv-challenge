const express = require('express');
const server = express();
const db = require('./data/dataAccess');
const cors = require('cors');
server.use(express.json());
server.use(cors());
const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
    db.getShoppingList(1)
        .then(recipes => {
            if (recipes.errno === 19) return Promise.reject(404)
            else res.send('test');
        })
        .catch(error => {
            if (error === 404) return res.status(404).json({ error: 'Provided dish_id key must match a currently existing dish.' });
            else return res.status(500).json({ error });
        });
})

server.listen(port, () => console.log(`Server listening on port ${port}.`))