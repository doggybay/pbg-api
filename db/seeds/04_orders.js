
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {
          "customer_id": 2,
          "plate_id": 2,
          "total": 80.75,
          "quantity": 14
        },
        {
          "customer_id": 6,
          "plate_id": 1,
          "total": 292.06,
          "quantity": 16
        },
        {
          "customer_id": 2,
          "plate_id": 1,
          "total": 274.18,
          "quantity": 7
        },
        {
          "customer_id": 4,
          "plate_id": 2,
          "total": 163.11,
          "quantity": 25
        },
        {
          "customer_id": 5,
          "plate_id": 2,
          "total": 73.43,
          "quantity": 33
        },
        {
          "customer_id": 6,
          "plate_id": 2,
          "total": 289.82,
          "quantity": 15
        },
        {
          "customer_id": 5,
          "plate_id": 1,
          "total": 54.2,
          "quantity": 5
        },
        {
          "customer_id": 1,
          "plate_id": 2,
          "total": 46.89,
          "quantity": 10
        },
        {
          "customer_id": 7,
          "plate_id": 2,
          "total": 347.6,
          "quantity": 29
        },
        {
          "customer_id": 1,
          "plate_id": 2,
          "total": 42.47,
          "quantity": 15
        },
        {
          "customer_id": 5,
          "plate_id": 1,
          "total": 125.22,
          "quantity": 34
        },
        {
          "customer_id": 5,
          "plate_id": 1,
          "total": 344.97,
          "quantity": 27
        },
        {
          "customer_id": 6,
          "plate_id": 3,
          "total": 49.08,
          "quantity": 37
        },
        {
          "customer_id": 5,
          "plate_id": 3,
          "total": 165.38,
          "quantity": 19
        },
        {
          "customer_id": 1,
          "plate_id": 1,
          "total": 58.34,
          "quantity": 17
        },
        {
          "customer_id": 5,
          "plate_id": 3,
          "total": 359.93,
          "quantity": 29
        },
        {
          "customer_id": 4,
          "plate_id": 2,
          "total": 192.86,
          "quantity": 36
        },
        {
          "customer_id": 1,
          "plate_id": 1,
          "total": 17.07,
          "quantity": 40
        },
        {
          "customer_id": 1,
          "plate_id": 2,
          "total": 375.14,
          "quantity": 37
        },
        {
          "customer_id": 4,
          "plate_id": 2,
          "total": 236.62,
          "quantity": 8
        },
        {
          "customer_id": 3,
          "plate_id": 1,
          "total": 311.84,
          "quantity": 16
        },
        {
          "customer_id": 1,
          "plate_id": 3,
          "total": 137.79,
          "quantity": 13
        },
        {
          "customer_id": 4,
          "plate_id": 3,
          "total": 140.99,
          "quantity": 18
        },
        {
          "customer_id": 4,
          "plate_id": 1,
          "total": 364.9,
          "quantity": 20
        },
        {
          "customer_id": 4,
          "plate_id": 1,
          "total": 233.59,
          "quantity": 18
        }
      ]);
    });
};
