
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plates').del()
    .then(function () {
      // Inserts seed entries
      return knex('plates').insert([
        {
          name: "molletes",
          description: "pan dulce con dulce",
          picture: "https://res.cloudinary.com/platosbygloria/image/upload/v1632088621/plates/molletes_bjahmu.jpg",
          price: 9.99,
        },
        {
          name: "tacos",
          description: "tortilla de maiz con carne de res",
          picture: "https://res.cloudinary.com/platosbygloria/image/upload/v1632088618/plates/tacos_c7t3mu.jpg",
          price: 19.99,
        },
        {
          name: "pescado con arroz",
          description: "pescado y arroze blanco",
          picture: "https://res.cloudinary.com/platosbygloria/image/upload/v1632088618/plates/pescadoconarroz_ax1co4.jpg",
          price: 199.99,
        },
      ]);
    });
};
