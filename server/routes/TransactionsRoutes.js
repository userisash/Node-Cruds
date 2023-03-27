const express = require('express')
const {GetAllTransactionsCtrl,
GetSingleTransaction,
CreateTransactionCtrl,
UpdateTransactionCtrl,
DeleteTransactionCtrl} = require('../controllers/transactions/TransactionsController')

const TransactionsRoute = express.Router()


TransactionsRoute.get('/', GetAllTransactionsCtrl)
TransactionsRoute.get('/:id', GetSingleTransaction)
TransactionsRoute.post('/', CreateTransactionCtrl)
TransactionsRoute.delete('/:id', DeleteTransactionCtrl)
TransactionsRoute.put('/:id', UpdateTransactionCtrl )

module.exports = TransactionsRoute