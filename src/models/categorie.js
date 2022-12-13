const { Schema, model } = require('mongoose');
const categorieSchema = new Schema({
    mame: String,
    image: String,
})

module.exports = model('Categorie', categorieSchema);