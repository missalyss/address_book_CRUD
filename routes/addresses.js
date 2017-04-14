var express = require('express')
var router = express.Router()
var knex = require('../db/connection')

router.get('/', function (req, res, next) {
  knex('addresses').then(function (allAddresses) {
    res.render('addresses/all-addresses', {allAddresses})
    })
})






module.exports = router
