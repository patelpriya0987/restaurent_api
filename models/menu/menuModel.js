const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    menuDate : {
        type: String,
        required : true,
    },
})

const menuModel = mongoose.model('menu',menuSchema);

module.exports = menuModel;