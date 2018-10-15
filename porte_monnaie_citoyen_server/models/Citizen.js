const mongoose = require('mongoose');

const CitizenSchema = new mongoose.Schema({
    lastname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    numNat: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    points: {
        type: Number,
        default: 0
    },
    town: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "town"
    }
});

module.exports = Citizen = mongoose.model('citizen', CitizenSchema);