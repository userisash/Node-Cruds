const express = require('express')
const {RegisterUserController, 
        UserLoginController, 
        GetUserController,
        UpdateUserController,
    DeleteUserController} = require('../controllers/users/UserCtrl')

const UserRoute = express.Router()


UserRoute.post('/register', RegisterUserController)

UserRoute.post('/Login', UserLoginController)

UserRoute.get('/:id', GetUserController)

UserRoute.delete('/:id', DeleteUserController)

UserRoute.put('/:id', UpdateUserController)


    module.exports = UserRoute