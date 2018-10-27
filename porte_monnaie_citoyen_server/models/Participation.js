const mongoose = require('mongoose');

const ParticipationSchema = new mongoose.Schema({
    citizen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'citizen',
        required: true
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'event',
        required: true
    },
    dateStart: {
        type: Date,
        default: Date().now,
    },
    dateEnd: {
        type: Date
    }
});

module.exports = Participation = mongoose.model('participation', ParticipationSchema);