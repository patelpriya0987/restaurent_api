const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    ingredientName : {
        type: String,
        required : true,
    },
    ingredientType : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'ingredientType'
    }
})

const ingredientModel = mongoose.model('ingredient',ingredientSchema);

module.exports = ingredientModel;