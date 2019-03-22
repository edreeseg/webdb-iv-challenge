const express = require('express');
const server = express();
const cors = require('cors');
server.use(express.json());
server.use(cors());
const port = process.env.PORT || 5000;

const dishRoutes = require('./routes/dishRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');

server.use('/dishes', dishRoutes);
server.use('/recipes', recipeRoutes);
server.use('/ingredients', ingredientRoutes);

server.listen(port, () => console.log(`Server listening on port ${port}.`));
