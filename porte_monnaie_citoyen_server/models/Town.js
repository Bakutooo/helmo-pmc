const mongoose = require('mongoose');

const TownSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select : false
    }
});

module.exports = Town = mongoose.model('town', TownSchema);
