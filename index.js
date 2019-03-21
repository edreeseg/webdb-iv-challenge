const express = require('express');
const server = express();
const db = require('./data/dataAccess');
const cors = require('cors');
server.use(express.json());
server.use(cors());
const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
    db.getDish(3)
        .then(dish => res.json({ dish }))
        .catch(error => {
            if (error === 404) return res.status(404).json({ error: 'No dish with this ID found.' });
            else return res.status(500).json({ error });
        });
})

server.listen(port, () => console.log(`Server listening on port ${port}.`))