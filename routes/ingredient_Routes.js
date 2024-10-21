const express = require('express');
const routes = express.Router();

const ingredient = require('../controller/ingredientController');


routes.get('/' , ingredient.getingredients);
routes.get('/:id' , ingredient.getingredient);
routes.post('/' ,ingredient.postingredient);
routes.put('/:id' ,ingredient.putingredient); 
routes.delete('/:id' ,ingredient.deleteingredient); 

module.exports = routes;