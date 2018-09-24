const mongoose = require('mongoose');

const CitizenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    numNat: {
        type: String,
        required: true,
        unique: true
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
    sold: {
        type: Number,
        default: 0
    },
    events_inprogress: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'event',
            unique: true
        }
    ],
    events: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'event'
        }
    ]
});

module.exports = Citizen = mongoose.model('citizen', CitizenSchema);