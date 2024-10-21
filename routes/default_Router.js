const express = require('express');
const routes = express.Router();

// routes
const bookingRoutes = require('./booking_Routes');
const customerRoutes = require('./customer_Routes');
const ingredientRoutes = require('./ingredient_Routes');
const ingredientTypeRoutes = require('./ingredient_Type_Routes');
const menuItemIngredientRoutes = require('./menu_Item_Ingredient_Routes');
const menuItemRoutes = require('./menu_Item_Routes');
const menuRoutes = require('./menu_Routes');
const orderRoutes = require('./order_Routes');
const staffRoleRoutes = require('./staff_Role_Routes');
const staffRoutes = require('./staff_Routes');
const tableRoutes = require('./table_Routes');


routes.use('/booking' , bookingRoutes);
routes.use('/customer' , customerRoutes);
routes.use('/ingredient' , ingredientRoutes);
routes.use('/ingredientType' , ingredientTypeRoutes);
routes.use('/menuItemIngredient' , menuItemIngredientRoutes);
routes.use('/menuItem' , menuItemRoutes);
routes.use('/menu' , menuRoutes);
routes.use('/order' , orderRoutes);
routes.use('/staffRole' , staffRoleRoutes);
routes.use('/staff' , staffRoutes);
routes.use('/table' , tableRoutes);

module.exports = routes;