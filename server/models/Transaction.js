var mongoose = require('mongoose')

var TransactionSchema = new mongoose.Schema({
  from: { type: String,
    unique: false },
  to: { type: String,
    unique: false },
  amount: { type: Number },
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Transaction', TransactionSchema)
