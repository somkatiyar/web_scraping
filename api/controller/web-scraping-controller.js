const express = require('express');
const router = express.Router()
const axios = require('axios');
const cheerio = require('cheerio');
// https://forecast.weather.gov/MapClick.php?lat=42.39849000000004&lon=-83.29583999999994
exports.scrapSite = async (req, res,next) =>{
    const url = 'https://www.flowersname.in/';
    const imageUrl = [];
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const imageUrls = [];

        // Modify this selector based on the structure of the website
        $('td.has-text-align-left img').each((index, element) => {
          const imageUrl = $(element).attr('data-lazy-src');
          const imageName = $(element).text().trim();

          if (imageUrl) {
            imageUrls.push({imageUrl:imageUrl,imageName:imageName});
          }
        });

        
    
        res.render('index', { imageUrls });
    } catch (error) {
        console.error('Error scraping website:', error);
        return [];
    }
       
}




