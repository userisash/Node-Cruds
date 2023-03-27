// const fs = require('fs')
// const express = require('express')
// const app = express()
// const userRouter = require("./controllers/userController")


// app.use(express.json())

// // app.listen(3000)

// app.get("/", (req, res)=>{
//     res.send("hello to this project")
// })

// app.use(userRouter)

const express = require('express')
const UserRoute = require('./routes/UsersRoutes')
const AccountRoute = require('./routes/AccountRoutes')
const TransactionsRoute = require('./routes/TransactionsRoutes')
require('./config/dbConnect')

const app = express()

//middlewares

app.use('/api/v1/user', UserRoute)
app.use('/api/v1/account', AccountRoute)
app.use('/api/v1/transactions', TransactionsRoute)


//error handlers



//Server Listen
const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})

