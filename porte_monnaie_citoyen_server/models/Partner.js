const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true,
        select : false
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    tva: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    town: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'town',
        required: true
    }
});

module.exports = Partner = mongoose.model('partner', PartnerSchema);