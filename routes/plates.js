const express = require('express');
const router = express.Router();

const platesController = require('../controllers/plates');

router.get('/plates', platesController.getAllPlates)

module.exports = router