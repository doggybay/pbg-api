const Customer = require('../models/Customer');


exports.getAllCustomers = async (req, res) => {
  const customers = await Customer.query().withGraphFetched('[addresses]');
  res.json(customers)
}