const mongoose = require('mongoose');

const CitizenActionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    town: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

module.exports = CitizenAction = mongoose.model('citizenAction', CitizenActionSchema);
