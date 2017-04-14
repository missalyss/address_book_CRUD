var express = require('express');
var router = express.Router();
const knex = require('../db/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('contacts').innerJoin('addresses', 'addresses.id', 'contacts.address_id').then(function (contactsAndAddresses) {
    res.render('index', {contactsAndAddresses})
  })
})

router.get('/new', function(req, res, next) {
  knex('addresses').innerJoin('contacts', 'addresses.id', 'contacts.address_id').then(function (address) {
    console.log(address);
    res.render('contacts/shared/new', {address})
  })
})

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  knex('contacts').innerJoin('addresses', 'addresses.id', 'contacts.address_id').where('contacts.id', id).then(function (onePerson) {
    console.log(onePerson);
    res.render('contacts/show-one', {onePerson})
  })
})

router.post('/', function(req, res, next) {
console.log(req.body['address_id']);
  var person = { id, first_name, last_name, phone_number, email_address, img_url, address_id } = req.body
  knex('contacts').insert(person, '*').then(function () {
    console.log(person);
    res.redirect('/')
  })
})



module.exports = router;
