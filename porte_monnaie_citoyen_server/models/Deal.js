const mongoose = require('mongoose');

const DealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    partner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'partner',
        required: true
    }
});

module.exports = Deal = mongoose.model('deal', DealSchema);