var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var bodyParser = require('body-parser')
var auth = require('./routes/auth')
var passport = require('passport')
require('./config/passport')(passport)
var book = require('./routes/book')
var transaction = require('./routes/transaction')
var ticket = require('./routes/ticket')

var app = express()
const server = require('http').createServer(app)
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

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/api/book', passport.authenticate('jwt', { session: false }), book)
app.use('/api/auth', auth)
app.use('/api/txn', passport.authenticate('jwt', { session: false }), transaction)
app.use('/api/ticket', ticket)

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

server.listen(5000, () => {
  console.log('listening on 5000')
})
