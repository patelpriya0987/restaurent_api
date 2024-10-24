const express = require('express');
const routes = express.Router();

const orderMenuItem = require('../controller/orderMenuItemController.js');

routes.get('/' , orderMenuItem.getorderMenuItems);
routes.get('/:id' , orderMenuItem.getorderMenuItem);
routes.post('/' ,orderMenuItem.postorderMenuItem);
routes.put('/:id' ,orderMenuItem.putorderMenuItem); 
routes.delete('/:id' ,orderMenuItem.deleteorderMenuItem); 

module.exports = routes;