const { Model } = require('objection');
const Customer = require("./Customer");

class Order extends Model {
  static get tableName() {
    return "orders";
  }

  static get relationMappings() {
    return {
      customer: {
        relation: Model.BelongsToOneRelation,
        modelClass: Customer,
        join: {
          from: "Orders.customer_id",
          to: "customers.id",
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["customer_id", "plate_id", "total", "quantity"],
      properties: {
        id: { type: "integer" },
        customer_id: { type: "integer" },
        plate_id: { type: "integer" },
        total: { type: "float" },
        quantity: { type: "integer" },
        is_cancel: { type: "boolean" },
        is_complete: { type: "boolean" }
      },
    };
  }
};

module.exports = Order;