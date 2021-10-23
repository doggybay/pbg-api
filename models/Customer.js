const { Model } = require('objection');

class Customer extends Model {
  static get tableName() {
    return 'customers'
  };

  static get relationMappings() {
    const Address = require('./Address');

    return {
      address: {
        relation: Model.HasManyRelation,
        modelClass: Address,
        join: {
          from: 'customers.id',
          to: 'addresses.customer_id'
        }
      },
      
    };

  };

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name', 'last_name', 'phone'],
      properties: {
        id: { type: 'integer' },
        first_name: { type: 'string', minLength: 1, maxLength: 255 },
        last_name: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        phone: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  };

};

module.exports = Customer;