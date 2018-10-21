const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    dateTime : {
        type : Date,
        require : true
    },
    citizen : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : "citizen"
    },
    deal : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : "deal"
    }
});

module.exports = Payment = mongoose.model('payment', PaymentSchema)