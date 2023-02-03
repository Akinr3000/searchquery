const express = require("express");
const mongoose = require("mongoose");
const app = express();
// this is the db created
// the username and password to my db has been removed, make sure you use yours
mongoose.connect(
    'mongodb+srv://<username>:<password>@cluster0.bqiybz5.mongodb.net/query2?retryWrites=true&w=majority'
).then(result => {
    console.log("connected");
    
}).catch(err=>{
    console.log(err);
})