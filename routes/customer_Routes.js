const express = require('express');
const routes = express.Router();

const customer = require('../controller/customerController');


routes.get('/' , customer.getcustomers);
routes.get('/:id' , customer.getcustomer);
routes.post('/' ,customer.postcustomer);
routes.put('/:id' ,customer.putcustomer); 

module.exports = routes;