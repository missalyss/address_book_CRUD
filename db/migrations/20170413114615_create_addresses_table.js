
exports.up = function(knex, Promise) {
  return knex.schema.table('addresses', function(t){
    t.increments()
    t.string('line_1').notNullable()
    t.string('line_2')
    t.string('city').notNullable()
    t.integer('zip').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('addresses')
};
