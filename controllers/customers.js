const Customer = require('../models/Customer');
const Address = require('../models/Address');

exports.getAllCustomers = async (req, res) => {
  const customers = await Customer.query().withGraphFetched('[address]');
  
  res.json(customers);
};

exports.getOneCustomer = async (req, res) => {
  const customerId = req.params.id;
  const customer = await Customer.query().findById(customerId).withGraphFetched('[address]');

  res.json(customer);
};

exports.addOneCustomer = async (req, res) => {
  const {first_name, last_name, email, phone, st_address, opt_address, city, state, zip_code} = req.body;
  const formattedZip = Number(zip_code);
  const address = {
    st_address,
    opt_address,
    city,
    state,
    zip_code: formattedZip
  };
  const customer = {
    first_name,
    last_name,
    email,
    phone
  };

  const newCustomer = await Customer.query().insert(customer).returning('*');

  const formattedAddress = {
    ...address,
    customer_id: newCustomer.id
  };

  await Address.query().insert(formattedAddress);

  const custWithAddr = await Customer.query().findById(newCustomer.id).withGraphFetched('[address]');

  res.json(custWithAddr);
}

exports.updateOneCustomer = async (req, res) => {
  const time = new Date;
  const customerId = req.params.id;
  const {first_name, last_name, email, phone, st_address, opt_address, city, state, zip_code} = req.body;
  const customer = {
    first_name,
    last_name,
    email,
    phone,
    updated_at: time
  };
  const address = {
    st_address,
    opt_address,
    city,
    state,
    zip_code,
    updated_at: time
  };

  

  await Address.query().select('customer_id').where('addresses.customer_id', '=', customerId).patch(address);

  const updatedCustomer = await Customer.query().findById(customerId).patch(customer).returning('*').withGraphFetched('[address]');

  res.json(updatedCustomer);
}

exports.deleteOneCustomer = async (req, res) => {
  
  const customerId = req.params.id;

  const deletedAddress = await Address.query().select('customer_id').where('addresses.customer_id', '=', customerId).del().returning('*');
  const deletedCustomer = await Customer.query().deleteById(customerId).returning('*');

  const newDelCust = { ...deletedCustomer, address: [deletedAddress] };

  res.json(newDelCust);
}

exports.deleteCustomers = async (req, res) => {
  console.log(req.body)
  const customerIds = req.body;
  let deletedCustomers = [];
  

  for (let i = 0; i < customerIds.length; i++) {
    
    const deletedAddress = await Address.query().select('customer_id').where('addresses.customer_id', '=', customerIds[i]).del().returning('*');
    const deletedCustomer = await Customer.query().deleteById(customerIds[i]).returning('*');

    const newDelCust = { ...deletedCustomer, address: [deletedAddress] };

    deletedCustomers.push(newDelCust);
    console.log("delete loop: ", newDelCust)
  }
  

  res.json(deletedCustomers)

  // const deletedAddress = await Address.query().select('customer_id').where('addresses.customer_id', '=', customerId).del().returning('*');
  // const deletedCustomer = await Customer.query().deleteById(customerId).returning('*');

  // const newDelCust = { ...deletedCustomer, address: [deletedAddress] };

  // res.json(newDelCust);
}