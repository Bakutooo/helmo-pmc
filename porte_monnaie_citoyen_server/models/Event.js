const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
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
    gain: {
        type: Number,
        required: true
    },
    date_begin: {
        type: Date,
        required: true
    },
    date_end: {
        type: Date,
        default: null
    }
});

module.exports = Event = mongoose.model('event', EventSchema);