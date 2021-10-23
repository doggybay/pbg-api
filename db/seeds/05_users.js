
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "first_name": "Avery",
          "last_name": "Russell",
          "email": "averyrussell@klugger.com",
          
        },
        {
          "first_name": "Celina",
          "last_name": "Mathis",
          "email": "celinamathis@klugger.com",
          
        },
        {
          "first_name": "Ryan",
          "last_name": "Obrien",
          "email": "ryanobrien@klugger.com",
          
        }
      ]);
    });
};
