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
    priority: {
        type: Number,
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
        default: null
    },
    missions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'mission'
        }
    ]
});

module.exports = Mission = mongoose.model('mission', MissionSchema);
