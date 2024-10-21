const express = require('express');
const routes = express.Router();

const menuItem = require('../controller/menuItemController');


routes.get('/' , menuItem.getmenuItems);
routes.get('/:id' , menuItem.getmenuItem);
routes.post('/' ,menuItem.postmenuItem);
routes.put('/:id' ,menuItem.putmenuItem); 
routes.delete('/:id' ,menuItem.deletemenuItem); 

module.exports = routes;