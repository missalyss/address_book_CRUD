
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, line_1: 'Room 1', line_2:'Deck 5', city: 'Enterprise', zip: 17014},
        {id: 2, line_1: 'Room 3', line_2:'Deck 13', city: 'Enterprise', zip: 17014},
        {id: 3, line_1: 'Room 35', line_2:'Deck 14', city: 'Enterprise', zip: 17014},
        {id: 4, line_1: 'Room 27', line_2:'Deck 8', city: 'Enterprise', zip: 17014}
      ]);
    });
};
