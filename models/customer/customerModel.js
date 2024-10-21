const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    fname : {
        type: String,
        required : true,
    },
    surname : {
        type: String,
        required : true,
    },
    phoneNumber : {
        type: String,
        required : true,
    },
    cellPhoneNumber : {
        type: String
    },
    email : {
        type: String,
        required : true,
    }
})

const customerModel = mongoose.model('customer',customerSchema);

module.exports = customerModel;