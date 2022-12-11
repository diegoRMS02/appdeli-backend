const { Schema, model } = require('mongoose');
const marinoSchema = new Schema({
    mame: String,
    price: Number,
    image: String,
    category: String,
})

module.exports = model('Marino', marinoSchema);