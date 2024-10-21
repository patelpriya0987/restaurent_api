const mongoose = require('mongoose');

const menuItemSchema = mongoose.Schema({
    menuItemDescription : {
        type: String,
        required : true,
    },
    menuItemPrice : {
        type: String,
        required : true,
    },
    menuId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'menu'
    },
    orderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'order'
    }
})

const menuItemModel = mongoose.model('menuItem',menuItemSchema);

module.exports = menuItemModel;