const express = require('express');
const routes = express.Router();

const ingredientType = require('../controller/ingredientTypeController');


routes.get('/' , ingredientType.getIngredientTypes);
routes.get('/:id' , ingredientType.getIngredientType);
routes.post('/' ,ingredientType.postIngredientType);
routes.put('/:id' ,ingredientType.putIngredientType); 
routes.delete('/:id' ,ingredientType.deleteIngredientType); 

module.exports = routes;