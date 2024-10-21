const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderDateTime : {
        type: String,
        required : true,
    },
    tableId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'table'
    }
})

const orderModel = mongoose.model('order',orderSchema);

module.exports = orderModel;