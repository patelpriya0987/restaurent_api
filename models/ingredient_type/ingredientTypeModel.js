const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const ingredientTypeSchema = mongoose.Schema({
    ingredientTypeCode : {
        type: String,
        required : true,
    },
    ingredientTypeDescription : {
        type : String,
    }
})

const ingredientTypeModel = mongoose.model('ingredientType',ingredientTypeSchema);

module.exports = ingredientTypeModel;