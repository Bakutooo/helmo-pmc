const mongoose = require('mongoose');

const MissionSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    latitude: {
        type: int,
        required: true
    },
    longitude: {
        type: int,
        required: true
    },
    gain: {
        type: int,
        required: true
    },
    priority: {
        type: int,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date_begin: {
        type: Date,
        required: true
    },
    date_end: {
        type: Date,
        required: true
    }
});

module.exports = Mission = mongoose.model('mission', MissionSchema);
