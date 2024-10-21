const mongoose = require('mongoose');

const staffRoleSchema = mongoose.Schema({
    staffRolecode : {
        type: String,
        required : true,
    },
    staffRoleDescription : {
        type : String
    }
})

const staffRoleModel = mongoose.model('staffRole',staffRoleSchema);

module.exports = staffRoleModel;