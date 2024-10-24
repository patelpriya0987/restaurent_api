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
    menuId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'menu'
    },
})

const orderMenuItemModel = mongoose.model('orderMenuItem',orderMenuItemSchema);

module.exports = orderMenuItemModel;