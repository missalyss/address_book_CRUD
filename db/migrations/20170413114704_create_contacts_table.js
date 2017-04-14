'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', function(t) {
    t.increments()
    t.string('first_name').notNullable()
    t.string('last_name').notNullable()
    t.string('phone_number').defaultTo('111-222-3333')
    t.string('email_address').defaultTo('email@email.com')
    t.text('img_url').defaultTo('http://www.chaostrophic.com/wp-content/uploads/2017/03/47ba21ca9b5cf73389f4398f382638211.jpg')
    t.integer('address_id').references('addresses.id')
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts')
}
