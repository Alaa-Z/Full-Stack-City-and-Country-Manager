const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const countrySchema = new Schema({
    name: String, 
    population: String,
    cities: [{
        type: Schema.Types.ObjectId,
        ref: 'City'
    }]
});

module.exports = mongoose.model('Country', countrySchema)