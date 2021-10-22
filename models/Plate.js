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
        name: { type: 'string'},
        description: { type: 'string'},
        picture: { type: 'string'}
      }
    }
  };
};

module.exports = Plate;