const mongoose = require("mongoose");

// this the schema used for my api, it must be removed to add your own schema or the schema created
const productschema = mongoose.Schema({
name:String,
price:String,
brand:String
});

module.exports = mongoose.model("search", productschema);