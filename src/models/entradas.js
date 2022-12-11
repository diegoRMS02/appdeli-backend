const { Schema, model } = require('mongoose');
const entradasSchema = new Schema({
    mame: String,
    price: Number,
    image: String,
    category: String,
})

module.exports = model('Entradas', entradasSchema);