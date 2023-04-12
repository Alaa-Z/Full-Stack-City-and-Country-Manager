const mongoose = require('mongoose');
const schema =  mongoose.Schema;

const countrySchema = new schema({
    name: String, 
    id: String,
    population: String
});

module.exports = mongoose.model('Country', countrySchema)