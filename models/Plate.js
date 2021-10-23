const { Model } = require('objection');

class Plate extends Model {
  static get tableName() {
    return 'plates'
  };

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'description', 'picture'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255},
        description: { type: 'text'},
        picture: { type: 'string', minLength: 1, maxLength: 1000},
        price: { type: 'float' }
      }
    }
  };
};

module.exports = Plate;