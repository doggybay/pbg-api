const { Model } = require('objection');

class Order extends Model {
  static get tableName() {
    return 'orders'
  };

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['customer_id', 'plate_id', 'total', 'quantity'],
      properties: {
        id: { type: 'integer' },
        customer_id: { type: 'integer' },
        plate_id: { type: 'integer' },
        total: { type: 'integer' },
        quantity: { type: 'integer' }
      }
    }
  };
};

module.exports = Order;