const express = require('express');
const routes = express.Router();

const order = require('../controller/orderController');


routes.get('/' , order.getorders);
routes.post('/' ,order.postorder);

module.exports = routes;