'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('addresses', function(t){
    t.increments()
    t.string('line_1').notNullable()
    t.string('line_2')
    t.string('city').notNullable().defaultTo('Enterprise')
    t.integer('zip').notNullable().defaultTo(12345)
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('addresses')
}
