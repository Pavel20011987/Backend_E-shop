const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: false

    },
    icon: {
        type: String,
        required: false
    },
    image: {
        type: String
    }

})

exports.Category = mongoose.model('Category', categorySchema);