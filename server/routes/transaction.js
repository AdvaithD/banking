var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
// var User = require('../models/User')
var User = mongoose.model('User')
var Transaction = require('../models/Transaction.js')
var passport = require('passport')
require('../config/passport')(passport)
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const getToken = (headers) => {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ')
    if (parted.length === 2) {
      return parted[1]
    } else {
      return null
    }
  } else {
    return null
  }
}

router.post('/deposit', async function (req, res, next) {
  try {
    let uid = req.body.username
    let amount = parseInt(req.body.amount)
    let user = await User.findOneAndUpdate({ username: uid }, { $inc: { checkingBalance: amount } })
    res.json({ success: true, user })
  } catch (error) {
    res.json({ success: false, error })
  }
})

router.post('/withdraw', async function (req, res, next) {
  try {
    let uid = req.body.username
    let amount = parseInt(req.body.amount)
    let user = await User.findOneAndUpdate({ username: uid }, { $inc: { checkingBalance: -amount } })
    res.json({ success: true, user })
  } catch (error) {
    res.json({ success: false, error })
  }
})

router.get('/', function (req, res, next) {
//   var token = getToken(req.headers)
//   if (token) {
  Transaction.find(function (err, txns) {
    if (err) return next(err)
    res.json(txns)
  })
//   } else {
  // return res.status(403).send({ success: false, msg: 'Unauthorized.' })
//   }
})

router.post('/', function (req, res) {
  console.log('New txn', req.body)
  //   var token = getToken(req.headers)
  //   if (token) {

  let txn = new Transaction({ from: req.body.from, to: req.body.to, amount: req.body.amount })
  //   Transaction.create(req.body, function (err, post) {
  //     if (err) return next(err)
  //     res.json(post)
  //   })
  txn.save(function (err) {
    if (err) {
      // return next(err)
      console.log('ERROR!!!')
    }
    res.send('Transaction Created successfully')
  })
//   } else {
  // return res.status(403).send({ success: false, msg: 'Unauthorized.' })
//   }
})

module.exports = router
