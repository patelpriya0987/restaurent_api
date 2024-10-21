const express = require('express');
const routes = express.Router();

const staff = require('../controller/staffController');


routes.get('/' , staff.getstaffs);
routes.get('/:id' , staff.getstaff);
routes.post('/' ,staff.poststaff);
routes.put('/:id' ,staff.putstaff); 
routes.delete('/:id' ,staff.deletestaff); 

module.exports = routes;