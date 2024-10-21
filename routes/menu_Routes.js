const express = require('express');
const routes = express.Router();

const menu = require('../controller/menuController');


routes.get('/' , menu.getmenus);
routes.get('/:id' , menu.getmenu);
routes.post('/' ,menu.postmenu);
routes.put('/:id' ,menu.putmenu); 
routes.delete('/:id' ,menu.deletemenu); 

module.exports = routes;