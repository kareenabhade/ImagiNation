const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
