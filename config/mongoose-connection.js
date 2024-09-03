const mongoose = require('mongoose');
const dbgr = require("debug")("development:mongoose");
const config=require("config");


console.log("Starting MongoDB connection...");
mongoose.connect(`${config.get("MONGODB_URI")}/Totezzy`)
  .then(function() {
      dbgr("connected");
  })
  .catch(function(err) {
      dbgr("connection error", err);
  });



module.exports=mongoose.connection;