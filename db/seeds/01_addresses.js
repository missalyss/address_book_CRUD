
exports.seed = function(knex, Promise) {
  return knex('addresses').del()
    .then(function () {
      return knex('addresses').insert([
        {id: 1, line_1: 'Room 1', line_2:'Deck 5', city: 'Enterprise', zip: 17014},
        {id: 2, line_1: 'Room 3', line_2:'Deck 13', city: 'Enterprise', zip: 17014},
        {id: 3, line_1: 'Room 35', line_2:'Deck 14', city: 'Enterprise', zip: 17014},
        {id: 4, line_1: 'Room 27', line_2:'Deck 8', city: 'Enterprise', zip: 17014}
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('addresses_id_seq', (SELECT MAX (id) FROM addresses))"
      )
    }).catch(function (error) {
      console.error("Red Alert! ", error);
    })
}
