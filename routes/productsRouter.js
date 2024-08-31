const express=require("express");
const router=express.Router();


router.get("/",(req,res)=>{
    res.send("Router-2");
});
module.exports=router;