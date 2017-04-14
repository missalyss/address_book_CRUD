var express = require('express');
var router = express.Router();
const knex = require('../db/connection');

//rendering routes
router.get('/', joinTablesAndRender('index'))
router.get('/new', newContactForm)
router.get('/:id', findIdAndRender('contacts/show-one'))
router.get('/:id/edit', editContact)

function editContact(req, res, next) {
    var id = req.params.id
  knex('addresses').innerJoin('contacts', 'addresses.id', 'contacts.address_id').where('contacts.id', id).then(function (jointTableInfo) {
    knex('addresses').then(function (addressOnly) {
      // console.log(jointTableInfo, addressOnly)
      res.render('contacts/edit-contact', {addressOnly, jointTableInfo})
    })
    })
  }



function joinTablesAndRender(location){
  return function (req, res, next) {
    knex.select('contacts.*', 'addresses.line_1', 'addresses.line_2', 'addresses.city', 'addresses.zip').table('contacts').innerJoin('addresses', 'contacts.address_id', 'addresses.id').then(function (contactsAndAddresses) {
      res.render(location, {contactsAndAddresses})
    })
  }
}

function findIdAndRender(location) {
  return function(req, res, next) {
    var id = req.params['id']
    knex('contacts').innerJoin('addresses', 'addresses.id', 'contacts.address_id').where('contacts.id', id).then(function (onePerson) {
      res.render(location, {onePerson})
    })
  }
}


function newContactForm(req, res, next) {
  knex('addresses').innerJoin('contacts', 'addresses.id', 'contacts.address_id').then(function (address) {

    res.render('contacts/new-contact', {address})
  })
}
///end rendering routes


router.post('/', function(req, res, next) {
  var person = { id, first_name, last_name, phone_number, email_address, img_url, address_id } = req.body
  knex('contacts').insert(person, '*').then(function () {
    res.redirect('/contacts')
  })
})

router.put('/:id', function(req, res, next) {
  var id = req.params.id
  var person = {
    first_name: req.body.first_name, 
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    email_address: req.body.email_address,
    img_url: req.body.img_url,
    address_id: req.body.id }

  console.log(id, person);
  knex('contacts').where('id', id).update(person)
  .then(function() {
    console.log(person);
    res.redirect('/contacts')
  })
})

router.delete('/:id', function(req, res, next) {
  // var person = { id, first_name, last_name, phone_number, email_address, img_url, address_id } = req.body
  var id = req.params.id
  knex('contacts').where('id', id).del().then(function () {
    res.redirect('/contacts')
  })
})



module.exports = router;
