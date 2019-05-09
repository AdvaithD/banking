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

router.get('/', async (req, res) => {
  try {
    console.log(req.user)
    let transactions = await Transaction.find({ $or: [{ 'from.id': req.user.username }, { 'to.id': req.user.username }] })
    res.status(200).send(transactions)
  } catch (err) {
    res.status(400).send({ err: err.toString() })
  }
})
router.post('/newtxn', async function (req, res, next) {
  let { from, to, amount, type } = req.body
  console.log(req.user.username)
  try {
    if ([from.id, to.id].includes(req.user.username)) {
      amount = parseInt(amount)
      let newtxn = new Transaction(req.body)
      let fromUser = from.id && await User.findOne({ username: from.id }); let toUser = to.id && await User.findOne({ username: to.id })
      if (fromUser) {
        if (from.type == 'CHECKING') {
          if (fromUser.checkingBalance - amount < 0) {
            throw new Error('not enough balance')
          } else {
            fromUser.checkingBalance -= amount
            fromUser.save()
          }
        } else if (from.type == 'SAVINGS') {
          if (fromUser.savingsBalance - amount < 0) {
            throw new Error('not enough balance')
          } else {
            fromUser.savingsBalance -= amount
            await fromUser.save()
          }
        }
      }
      if (toUser) {
        if (to.type == 'CHECKING') {
          toUser.checkingBalance += amount
        } else if (to.type == 'SAVINGS') {
          toUser.savingsBalance += amount
        }
        await toUser.save()
      }

      await newtxn.save()
      res.status(200).json({ newtxn, fromUser, toUser })
    } else {
      throw new Error('unauthorized')
    }
  } catch (error) {
    console.log(error)
    error = error.toString()
    res.status(400).json({ message: 'Failed transaction', error })
  }
})

module.exports = router
