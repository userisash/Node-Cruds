const express = require('express')
const router = express.Router();
const userId = require('../services/userServices')

router.get("/users", (req,res) =>{
    res.send("'users are here'")
})

router.post("/users", (req, res)=>{
    console.log(req.body)
    res.send("created user")
})

router.get("/users/:userid", (req, res)=>{
    res.send(userId(req.params.userid))
})

module.exports = router