const mongoose = require('mongoose');

const menuItemIngedientSchema = mongoose.Schema({
    itemIngedientQuantitiy : {
        type: String,
        required : true,
    },
    menuItemId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'menuItem'
    },
    ingredientId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'ingredient'
    }
})

const menuItemIngedientModel = mongoose.model('menuItemIngedients',menuItemIngedientSchema);

module.exports = menuItemIngedientModel;