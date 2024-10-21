const express = require('express');
const routes = express.Router();

const table = require('../controller/tableController');


routes.get('/' , table.gettables);
routes.post('/' ,table.posttable); 

module.exports = routes;