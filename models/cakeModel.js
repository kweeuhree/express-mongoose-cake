const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
    name: {type: String, required: true },
    recipe: {type: String, required: true },
    countryOfOrigin: {type: String, required: true },
}, { timestamps: true });

const Cake = mongoose.model("Cake", cakeSchema);

module.exports = Cake;