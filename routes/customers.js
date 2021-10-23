const express = require('express');
const router = express.Router();

const customersController = require('../controllers/customers')

router.get('/customers', customersController.getAllCustomers);

module.exports = router;