var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var passport = require('passport')
var Ticket = require('../models/Ticket.js')
require('../config/passport')(passport)

router.post('/', async function (req, res) {
  console.log('New support ticket')
  let { message } = req.body
  let tick = await new Ticket({ from: 'omar@intel.com', info: message })
  tick.save(function (err) {
    if (err) {
      console.log('ERROR SAVING TICKET', err)
    }
    res.send({ status: 'success', message: 'ticket saved' })
  })
})

module.exports = router
