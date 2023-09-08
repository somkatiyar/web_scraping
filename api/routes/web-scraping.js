const express = require('express');
const router = express.Router()
const webScrapingController = require('../controller/web-scraping-controller')




router.post('/scrap_site', webScrapingController.scrapSite);
module.exports = router;





