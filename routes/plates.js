  const express = require('express');
  const router = express.Router();

const platesController = require('../controllers/plates');

router.get('/plates', platesController.getAllPlates);
router.get('/plates/:id', platesController.getOnePlate);
router.post('/plates', platesController.addOnePlate);
router.patch('/plates/:id', platesController.updateOnePlate);
router.delete('/plates/:id', platesController.deleteOnePlate);

module.exports = router;