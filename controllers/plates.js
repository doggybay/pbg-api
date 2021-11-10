const Plate = require('../models/Plate');

exports.getAllPlates = async (req, res) => {
  const plates = await Plate.query();
  
  res.json(plates);
};

exports.getOnePlate = async (req, res) => {
  const plateId = req.params.id;

  try {
    const plate = await Plate.query().findById(plateId);

    if (!plate) {
      throw new Error('Plate does not exist')
    } else {
      res.json(plate);
    }
    
  } catch (err) {
    
    console.error(err);
    res.sendStatus(404);
  }
  
};

exports.addOnePlate = async (req, res) => {
  const plate = { ...req.body };
  let newPlate;

  try {
    newPlate = await Plate.query().insert(plate).returning('*');
  } catch (err) {
    res.status(400).send(err)
  } 

  res.json(newPlate)
};

exports.updateOnePlate = async (req, res) => {
  const time = new Date;
  const plateToUpdate = { ...req.body, updated_at: time };
  const plateId = req.params.id;
  let updatedPlate;

  try {
    updatedPlate = await Plate.query().findById(plateId).patch(plateToUpdate).returning('*');
  } catch (err) {
    res.status(400).send(err)
  } 

  res.json(updatedPlate);
};

exports.deleteOnePlate = async (req, res) => {
  const plateId = req.params.id;
  let deletedPlate;
  
  try {
    deletedPlate = await Plate.query().deleteById(plateId).returning('*');
  } catch (err) {
    res.send(err)
  } 
  
  if (!deletedPlate) {
    res.status(204)
  }
  res.json(deletedPlate);
};

exports.deletePlates = async (req, res) => {
  
  const plateIds = req.body;
  let deletedPlates = [];
  

  for (let i = 0; i < plateIds.length; i++) {
    
    const deletedPlate = await Plate.query().deleteById(plateIds[i]).returning('*');

    deletedPlates.push(deletedPlate);
    
  }
  

  res.json(deletedPlates)
};