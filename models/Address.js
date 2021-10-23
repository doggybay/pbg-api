const { Model } = require('objection')
const Customer = require('./Customer')

class Address extends Model {
  static get tableName() {
    return 'addresses'
  }

  static get relationMappings() {
  
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: Customer,
        join: {
          from: "Addresses.customer_id",
          to: "customer.id"
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['customer_id', 'st_address', 'city', 'state', 'zip_code'],

      properties: {
        id: { type: 'integer' },
        user_id: { type: 'integer' },
        st_address: { type: 'string', minLength: 1, maxLength: 255  },
        opt_address: { type: 'string', minLength: 1, maxLength: 255  },
        city: { type: 'string', minLength: 1, maxLength: 255  },
        state: { type: 'string', minLength: 2, maxLength: 2  },
        zip_code: { type: 'integer', minLength: 5, maxLength: 5  }
      }
    }
  }

}

module.exports = Address