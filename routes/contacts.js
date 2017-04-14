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
  res.render('contacts/shared/new')
})

router.get('/:id', function(req, res, next) {
  var id = req.params.id
  knex('contacts').innerJoin('addresses', 'addresses.id', 'contacts.address_id').where('contacts.id', id).then(function (onePerson) {
    console.log(onePerson);
    res.render('contacts/show-one', {onePerson})
  })
})

router.post('/', function(req, res, next) {
  knex('contacts')
})



module.exports = router;
