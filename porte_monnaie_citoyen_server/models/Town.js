const mongoose = require('mongoose');

const TownSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    partners: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'partner'
        }
    ]
});

module.exports = Town = mongoose.model('town', TownSchema);
