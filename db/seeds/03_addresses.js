
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('addresses').del()
    .then(function () {
      // Inserts seed entries
      return knex('addresses').insert([
        {
          user_id: 1,
          st_address: "139 Dekoven Court",
          opt_address: "",
          city: "Manitou",
          state: "OH",
          zip_code: 51433
        },
        {
          user_id: 2,
          st_address: "162 Veronica Place",
          opt_address: "",
          city: "Como",
          state: "GA",
          zip_code: 62715
        },
        {
          user_id: 3,
          st_address: "387 Crystal Street",
          opt_address: "",
          city: "Alden",
          state: "PA",
          zip_code: 42313
        },
        {
          user_id: 4,
          st_address: "981 Jackson Court",
          opt_address: "",
          city: "Ryderwood",
          state: "CT",
          zip_code: 16651
        },
        {
          user_id: 5,
          st_address: "343 Amersfort Place",
          opt_address: "",
          city: "Sisquoc",
          state: "PA",
          zip_code: 33110
        },
        {
          user_id: 6,
          st_address: "186 Apollo Street",
          opt_address: "",
          city: "Kohatk",
          state: "AR",
          zip_code: 47581
        },
        {
          user_id: 7,
          st_address: "438 Crawford Avenue",
          opt_address: "",
          city: "Beaverdale",
          state: "OR",
          zip_code: 64512
        }
      ]);
    });
};
