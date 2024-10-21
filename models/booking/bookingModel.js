const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    dateOfBooking : {
        type: String,
        required : true,
    },
    numberOfMember : {
        type: String,
        required : true,
    },
    tableId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'table'
    },
    customerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'customer'
    }
})

const bookingModel = mongoose.model('booking',bookingSchema);

module.exports = bookingModel;