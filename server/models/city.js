const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const citySchema = new Schema({
    name: String, 
    description: String,
    countryId: {
        type: Schema.Types.ObjectId,
        ref: 'Country'
    }
});

module.exports = mongoose.model('City', citySchema)