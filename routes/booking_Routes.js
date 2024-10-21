const express = require('express');
const routes = express.Router();

const booking = require('../controller/bookingController');


routes.get('/' , booking.getbookings);
routes.post('/' ,booking.postbooking);

module.exports = routes;