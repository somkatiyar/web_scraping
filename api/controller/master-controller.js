const client = require('../../database.config')
const mongoose = require('mongoose')
const Cites = require('../models/cities')
const db = require('../../database.config');
const fs = require('fs');
const cityData = require('../../masterdata/sudan.json');


exports.createCollection = (req, res, next ) => {

    Cites.insertMany(cityData)
 .then((result) => {
   res.status(200).json({
    msg:'Data inserted successfully.',
    data:result
   })
 })
 .catch((err) => {
   res.status(200).json({
    msg:'Error inserting data:',
    data:err
   })
 })

    // const countries = new Countries({
    //     _id: new mongoose.Types.ObjectId,
    //     continent: req.body.continent,
    //     capital: req.body.capital,
    //     languages: req.body.languages,
    //     geonameId: req.body.geonameId,
    //     south: req.body.south,
    //     isoAlpha3: req.body.isoAlpha3,
    //     north: req.body.north,
    //     fipsCode: req.body.fipsCode,
    //     population: req.body.population,
    //     east: req.body.east,
    //     isoNumeric: req.body.isoNumeric,
    //     areaInSqKm: req.body.areaInSqKm,
    //     countryCode: req.body.countryCode,
    //     west: req.body.west,
    //     countryName: req.body.countryName,
    //     postalCodeFormat: req.body.postalCodeFormat,
    //     continentName: req.body.continentName,
    //     currencyCode: req.body.currencyCode,
    // });
    // countries.save().then(result =>{
    //    res.status(200).json({
    //        message: "countries inserted successfully",
    //        data: result     
    //    });
    // }).catch(err=> {
    //    res.status(200).json({
    //        message: err.message         
    //    });
    // })

}

exports.cities = (req, res, next) => {
  Cites.find({}).select('geonameId').then((result) => {
    res.status(200).json({
     msg:'City Data.',
     count:result.length,
     data:result.map(e=>e.geonameId)
    })
  })
  .catch((err) => {
    res.status(200).json({
     msg:'Error inserting data:',
     data:err
    })
  })
}