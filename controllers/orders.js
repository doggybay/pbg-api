const Order = require("../models/Order");

exports.getAllOrders = async (req, res) => {
  const orders = await Order.query();

  res.json(orders);
};

exports.addOrder = async (req, res) => {
  const order = { ...req.body };
  let newOrder;

  try {
    newOrder = await Order.query().insert(order).returning('*');
  } catch (err) {
    res.status(400).send(err);
  }

  res.json(newOrder);
};