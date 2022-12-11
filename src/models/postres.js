const { Schema, model } = require('mongoose');
const postresSchema = new Schema({
    mame: String,
    price: Number,
    image: String,
    category: String,
})

module.exports = model('Postres', postresSchema);