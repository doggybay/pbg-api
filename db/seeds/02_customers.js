
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
          "first_name": "Avery",
          "last_name": "Russell",
          "email": "averyrussell@klugger.com",
          "phone": "899-422-3536"
        },
        {
          "first_name": "Celina",
          "last_name": "Mathis",
          "email": "celinamathis@klugger.com",
          "phone": "808-499-3382"
        },
        {
          "first_name": "Ryan",
          "last_name": "Obrien",
          "email": "ryanobrien@klugger.com",
          "phone": "844-585-2886"
        },
        {
          "first_name": "Cross",
          "last_name": "Crosby",
          "email": "crosscrosby@klugger.com",
          "phone": "961-587-2915"
        },
        {
          "first_name": "Hampton",
          "last_name": "Koch",
          "email": "hamptonkoch@klugger.com",
          "phone": "867-555-2397"
        },
        {
          "first_name": "Espinoza",
          "last_name": "Stone",
          "email": "espinozastone@klugger.com",
          "phone": "810-571-2992"
        },
        {
          "first_name": "Sasha",
          "last_name": "Stafford",
          "email": "sashastafford@klugger.com",
          "phone": "836-514-2481"
        }
      ]);
    });
};
