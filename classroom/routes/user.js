const express = require("express")
const router = express.Router();


//  users
//index - user
router.get('/',(req,res)=>{
    res.send("get for users");
})

//show - users
router.get('/:id',(req,res)=>{
    res.send("get for show users id")
})

//post
router.post('/',(req,res)=>{
    res.send("post for show users")
})

//delete
router.delete('/:id',(req,res)=>{
    res.send("delete for show users id")
})

module.exports = router;