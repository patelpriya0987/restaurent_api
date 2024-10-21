const mongoose = require('mongoose');

const tableSchema = mongoose.Schema({
    tableNumber : {
        type: String,
        required : true,
    },
    tableDetails : {
        type: String,
        required : true,
    }
})

const tableModel = mongoose.model('table',tableSchema);

module.exports = tableModel;