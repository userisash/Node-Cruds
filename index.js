const fs = require('fs')
const express = require('express')
const app = express()
const userRouter = require("./routes/userController")

app.use(express.json())

app.listen(3000)

app.get("/", (req, res)=>{
    res.send("hello to this project")
})

app.use(userRouter)
