var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var bodyParser = require('body-parser')
var auth = require('./routes/auth')

var book = require('./routes/book')
var app = express()

// mlab test one
const mongoUrl = 'mongodb://admin:admin123@ds157544.mlab.com:57544/portfolio'
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect(mongoUrl, { promiseLibrary: require('bluebird'), useNewUrlParser: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 'extended': 'false' }))
app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/book', book)
app.use('/api/auth', auth)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Possible fix for rendering production version
app.get('/', function (req, res) {
  console.log(path.join(__dirname, 'build'))
  res.sendFile('/build/index.html')
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  // res.status(err.status || 500)
  // res.render('error')
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err
  })
})

module.exports = app
