//  importing modules and libraries
const express = require('express');

// controller files
const controller = require('./controller');

// building router
const router = express.Router();

// getting incoming request and calling proper controller logic 
router.get('/', controller.getIndex);


module.exports = router;