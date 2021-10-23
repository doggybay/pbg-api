const Plate = require('../models/Plate');

exports.getAllPlates = async (req, res) => {
  const plates = await Plate.query();
  
  res.json(plates);
};

exports.getOnePlate = async (req, res) => {
  const plateId = req.parms.id;
  const plate = await Plate.query().findById(plateId);

  res.json(plate);
};

exports.addOnePlate = async (req, res) => {
  const plate = { ...req.body }

  const newPlate = await Plate.query().insert(plate).returning('*');
  
  res.json(newPlate)
};

exports.updateOnePlate = async (req, res) => {
  const plateToUpdate = { ...req.body };
  const plateId = req.parms.id;

  const updatedPlate = await Plate.query().findById(plateId).patch(plateToUpdate).returning('*');
  
  res.json(updatedPlate);
};

exports.deleteOnePlate = async (req, res) => {
  const plateId = req.parms.id;

  const deletedPlate = await Plate.query().deleteById(plateId).returning('*');

  res.json(deletedPlate);
};