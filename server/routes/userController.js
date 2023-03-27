const express = require('express')
const router = express.Router();
const findById = require('../services/userServices')


router.get("/users", (req,res) =>{
    res.send("'users are here'")
})

router.post("/users", (req, res)=>{
    console.log(req.body)
    res.send("created user")
})

router.get("/users/:userid", (req, res)=>{
    res.send(findById(req.params.userid))
})

module.exports = router