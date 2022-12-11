const { Schema, model } = require('mongoose');
const criolloSchema = new Schema({
    mame: String,
    price: Number,
    image: String,
    category: String,
})

module.exports = model('Criollo', criolloSchema);