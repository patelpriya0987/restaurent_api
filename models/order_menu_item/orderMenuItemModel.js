const mongoose = require('mongoose');

const orderMenuItemSchema = mongoose.Schema({
    orderMenuItemQuantity : {
        type: String,
        required : true,
    },
    orderMenuItemComments : {
        type : String,
        required : true,
    },
    orderId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'order'
    },
    menuItemId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'menuItem'
    },
})

const orderMenuItemModel = mongoose.model('orderMenuItem',orderMenuItemSchema);

module.exports = orderMenuItemModel;