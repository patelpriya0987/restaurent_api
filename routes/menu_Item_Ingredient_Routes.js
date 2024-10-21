const express = require('express');
const routes = express.Router();

const menuItemIngredient = require('../controller/menuItemIngredientController');


routes.get('/' , menuItemIngredient.getmenuItemIngredients);
routes.get('/:id' , menuItemIngredient.getmenuItemIngredient);
routes.post('/' ,menuItemIngredient.postmenuItemIngredient);
routes.put('/:id' ,menuItemIngredient.putmenuItemIngredient); 
routes.delete('/:id' ,menuItemIngredient.deletemenuItemIngredient); 

module.exports = routes;