const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true)

const restaurantSchema = new mongoose.Schema({
    idRestaurant: {
        type: Number,
        required: [true, 'restaurantId is required'],
    },
    name: String,
    url: String,
    location: Object,
    photo_url: String,
    UserId: String
}, {
    collection: 'Restaurant'
})

module.exports = mongoose.model('Restaurant', restaurantSchema)