var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

router.get('/', function (req, res, next) {
  knex('addresses').then(function (allAddresses) {
    res.render('addresses/all-addresses', {allAddresses})
    })
})

router.get('/new', function (req, res, next) {
  res.render('addresses/new-address')
})

router.post('/', function (req, res, next) {
  var address = { id, line_1, line_2, city, zip } = req.body
  knex('addresses').insert(address).then(function() {
    res.redirect('/addresses')
  })
})



module.exports = router
