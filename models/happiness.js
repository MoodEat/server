const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const happinessSchema = new mongoose.Schema({
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
    collection: 'happiness'
})

module.exports = mongoose.model('happiness', happinessSchema)