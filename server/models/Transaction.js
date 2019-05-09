var mongoose = require('mongoose')

var NewSchema = new mongoose.Schema({
  id: String,
  type: String
})

var TransactionSchema = new mongoose.Schema({
  from: NewSchema,
  type: { type: String },
  to: NewSchema,
  amount: { type: Number },
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Transaction', TransactionSchema)
