const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const angerSchema = new mongoose.Schema({
    food: {
        type: String,
        required: [true, "food can't be empty"],
        lowercase: true,
        unique: true
    },
    image: {
        type: String,
        required: [true, "image can't be empty"],
        unique: true
    }
}, {
    collection: 'anger'
})

module.exports = mongoose.model('Anger', angerSchema)