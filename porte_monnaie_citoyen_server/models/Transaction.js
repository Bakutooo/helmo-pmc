const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = User = mongoose.model('transaction', TransactionSchema);