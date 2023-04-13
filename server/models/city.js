const mongoose = require('mongoose');
const schema =  mongoose.Schema;

const citySchema = new schema({
    name: String, 
    id: String,
    description: String,
    countryId: String
});

module.exports = mongoose.model('City', citySchema)