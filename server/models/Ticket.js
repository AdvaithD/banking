var mongoose = require('mongoose')

var TicketSchema = new mongoose.Schema({
  from: { type: String,
    unique: false },
  info: { type: String,
    unique: false },
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Ticket', TicketSchema)
