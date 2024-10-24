const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    orderDateTime : {
        type: Date,
        required : true,
    },
    tableId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'table'
    },
    staffId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'staff'
    }
})

const orderModel = mongoose.model('order',orderSchema);

module.exports = orderModel;