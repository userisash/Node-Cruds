const express = require('express')
const {CreateAccountController,
GetAccountController,
DeleteAccountController,
UpdateAccountController} = require('../controllers/account/AccountCtrl')

const AccountRoute = express.Router()


AccountRoute.post('/register',CreateAccountController )
AccountRoute.get('/:id', GetAccountController)
AccountRoute.delete('/:id', DeleteAccountController)
AccountRoute.put('/:id', UpdateAccountController)

module.exports = AccountRoute