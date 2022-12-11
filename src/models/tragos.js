const { Schema, model } = require('mongoose');
const tragosSchema = new Schema({
    mame: String,
    price: Number,
    image: String,
    category: String,
})

module.exports = model('Tragos', tragosSchema);