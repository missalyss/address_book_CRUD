//requiring dependencies
var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
//requiring routes files
var index = require('./routes/index')
var contacts = require('./routes/contacts')

var app = express()


// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

//register partial setup
var hbs = require('hbs')
var hbsutils = require('hbs-utils')(hbs)
hbsutils.registerPartials(path.join(__dirname, 'views', 'contacts', 'shared') )

//extra setup [favicon, morgan, bodyparser, ]
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//links app.js to routes
app.use('/', index)
app.use('/contacts', contacts)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
