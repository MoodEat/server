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
        unique: true,
        validate: { 
            validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
            message: 'Must be a Valid URL' 
          }
    }
}, {
    collection: 'surprise'
})

module.exports = mongoose.model('surprise', surpriseSchema)