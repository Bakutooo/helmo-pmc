const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gain: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    town: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "town"
    },
    partner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "partner"
    }
});

module.exports = Event = mongoose.model('event', EventSchema);