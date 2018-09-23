const mongoose = require('mongoose');

const TownSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = Town = mongoose.model('town', TownSchema);
