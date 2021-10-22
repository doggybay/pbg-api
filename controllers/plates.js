const Plate = require('../models/Plate');

exports.getAllPlates = (req, res) => {
  Plate.query().then(plates => res.json(plates));
  
};