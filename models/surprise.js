const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const surpriseSchema = new mongoose.Schema({
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
    collection: 'surprise'
})

module.exports = mongoose.model('surprise', surpriseSchema)