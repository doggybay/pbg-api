const Plate = require('../models/Plate');

exports.getAllPlates = async (req, res) => {
  const plates = await Plate.query();
  
  res.json(plates);
};

exports.getOnePlate = async (req, res) => {
  const plateId = req.params.id;
  const plate = await Plate.query().findById(plateId);

  res.json(plate);
};

exports.addOnePlate = async (req, res) => {
  const plate = { ...req.body }

  const newPlate = await Plate.query().insert(plate).returning('*');
  
  res.json(newPlate)
};

exports.updateOnePlate = async (req, res) => {
  const time = new Date;
  const plateToUpdate = { ...req.body, updated_at: time };
  const plateId = req.params.id;

  const updatedPlate = await Plate.query().findById(plateId).patch(plateToUpdate).returning('*');
  
  res.json(updatedPlate);
};

exports.deleteOnePlate = async (req, res) => {
  const plateId = req.params.id;

  const deletedPlate = await Plate.query().deleteById(plateId).returning('*');

  res.json(deletedPlate);
};