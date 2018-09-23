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
    }
});

module.exports = User = mongoose.model('citizen', UserSchema);