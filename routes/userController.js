const express = require('express')
const router = express.Router();


router.get("/users", (req,res) =>{
    res.send("'users are here'")
})

router.post("/users", (req, res)=>{
    console.log(req.body)
    res.send("created user")
})

router.get("/users/:userid", (req, res)=>{
    res.send(req.params.userid)
})

module.exports = router