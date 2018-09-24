const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    tel: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'event'
        }
    ],
    deals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'deal'
        }
    ],
    request: {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
});

module.exports = Partner = mongoose.model('partner', PartnerSchema);