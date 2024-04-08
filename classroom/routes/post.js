const express = require("express")
const router = express.Router();

//posts
//index
router.get('/',(req,res)=>{
    res.send("get for posts")
})

//show
router.get('/:id',(req,res)=>{
    res.send("get for show posts id")
})

//post
router.post('/',(req,res)=>{
    res.send("post for show posts")
})

//delete
router.delete('/:id',(req,res)=>{
    res.send("delete for show posts id")
})

module.exports = router;