var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Book = require('../models/Book.js')

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

router.get('/', function (req, res) {
  res.json({ user: req.user })
})

router.post('/', function (req, res) {
  var token = getToken(req.headers)
  if (token) {
    Book.create(req.body, function (err, post) {
      if (err) return next(err)
      res.json(post)
    })
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' })
  }
})

module.exports = router
