const express = require('express')
const router = express.Router();
const users = ['ash', 'mo', 'janet']


router.get("/users", (req,res) =>{
    res.send("'users are here'")
})

router.post("/users", (req, res)=>{
    console.log(req.body)
    res.send("created user")
})

router.get("/users/:userid", (req, res)=>{
    res.send(users[req.params.userid])
})

module.exports = router