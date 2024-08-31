const express=require("express");
const router=express.Router();


router.get("/",(req,res)=>{
    res.send("Router-1");
});
module.exports=router;