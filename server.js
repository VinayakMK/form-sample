const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/register.html");
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})