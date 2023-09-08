const mongoose = require('mongoose');

const countriesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    continent: String,
    capital: String,
    languages: String,
    geonameId: Number,
    south: Number,
    isoAlpha3: String,
    north: String,
    fipsCode: String,
    population: String,
    east: Number,
    isoNumeric: String,
    areaInSqKm: String,
    countryCode: String,
    west: Number,
    countryName: String,
    postalCodeFormat: String,
    continentName: String,
    currencyCode: String,
    CreatedDate: { type: Date, required: true, default: Date.now },
    
})


module.exports = mongoose.model('Countries',countriesSchema);