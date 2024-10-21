const express = require('express');
const routes = express.Router();

const staffRole = require('../controller/staffRoleController');


routes.get('/' , staffRole.getstaffRoles);
routes.get('/:id' , staffRole.getstaffRole);
routes.post('/' ,staffRole.poststaffRole);
routes.put('/:id' ,staffRole.putstaffRole); 
routes.delete('/:id' ,staffRole.deletestaffRole); 

module.exports = routes;