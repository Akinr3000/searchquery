const express = require("express");

const app = express();

require("./config");

const product = require("./product");

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("welcome home")
})

// this can be removed since i just used it to post into the db
app.post("/post", async(req,res)=>{
    const data = new product({
        name:req.body.name,
        price:req.body.price,
        brand:req.body.brand
    })
    const save = await data.save();
    res.json(save)
});

// this is what is actually needed for the search api
app.get("/search/:key", async(req,res)=>{
    let show = await product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {price:{$regex:req.params.key}},
            {brand:{$regex:req.params.key}}
        ]
    })
    
    res.send(show);
});

// this is the port the backend is listening from
app.listen(5000)
