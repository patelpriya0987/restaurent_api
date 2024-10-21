const mongoose = require('mongoose');

const staffSchema = mongoose.Schema({
    staff_FName : {
        type: String,
        required : true,
    },
    staff_LName : {
        type: String,
        required : true,
    },
    staffRole : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'staffRole'
    }
})

const staffModel = mongoose.model('staff',staffSchema);

module.exports = staffModel;