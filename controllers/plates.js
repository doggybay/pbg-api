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
    
    console.error(err)
    res.sendStatus(404);
  }
  
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

exports.deletePlates = async (req, res) => {
  
  const plateIds = req.body;
  let deletedPlates = [];
  

  for (let i = 0; i < plateIds.length; i++) {
    
    const deletedPlate = await Plate.query().deleteById(plateIds[i]).returning('*');

    deletedPlates.push(deletedPlate);
    
  }
  

  res.json(deletedPlates)
};