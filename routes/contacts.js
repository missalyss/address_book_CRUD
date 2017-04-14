var express = require('express');
var router = express.Router();
const knex = require('../db/connection');

//rendering routes
router.get('/', getAllTables)
router.get('/new', newContactForm)
router.get('/:id', showOneContact )

function getAllTables(req, res, next) {
  knex.select('contacts.*', 'addresses.line_1', 'addresses.line_2', 'addresses.city', 'addresses.zip').table('contacts').innerJoin('addresses', 'contacts.address_id', 'addresses.id').then(function (contactsAndAddresses) {
    res.render('index', {contactsAndAddresses})
  })
}

function newContactForm(req, res, next) {
  knex('addresses').innerJoin('contacts', 'addresses.id', 'contacts.address_id').then(function (address) {
    console.log(address);
    res.render('contacts/new-contact', {address})
  })
}

router.get('/edit', function (req, res, next) {
  res.render
})


function showOneContact(req, res, next) {
  var id = req.params['id']
  console.log(id);
  knex('contacts').innerJoin('addresses', 'addresses.id', 'contacts.address_id').where('contacts.id', id).then(function (onePerson) {
    console.log(onePerson);
    res.render('contacts/show-one', {onePerson})
  })
}

router.post('/', function(req, res, next) {
console.log(req.body['address_id']);
  var person = { id, first_name, last_name, phone_number, email_address, img_url, address_id } = req.body
  knex('contacts').insert(person, '*').then(function () {
    console.log(person)
    res.redirect('/')
  })
})

// router.delete('/:id')



module.exports = router;
