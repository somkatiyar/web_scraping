const express = require('express');
const router = express.Router()
const masterController = require('../controller/master-controller')




router.post('/createCollection', masterController.createCollection);
router.get('/cities', masterController.cities);
module.exports = router;





