const { Schema, model } = require('mongoose');
const parrillaSchema = new Schema({
    mame: String,
    price: Number,
    image: String,
    category: String,
})

module.exports = model('Parrilla', parrillaSchema);