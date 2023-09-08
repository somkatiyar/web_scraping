

const mongoose = require('mongoose');

const citiesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    adminCode1: String,
    lat: String,
    lng: String,
    geonameId: Number,
    toponymName: String,
    countryId: String,
    fcl: String,
    population: Number,
    countryCode: String,
    name: String,
    fclName: String,
    adminCodes1: {
        ISO3166_2: String
    },
    countryName: String,
    fcodeName: String,
    adminName1: String,
    fcode: String,
    CreatedDate: { type: Date, required: true, default: Date.now },
    
})


module.exports = mongoose.model('Cities',citiesSchema);