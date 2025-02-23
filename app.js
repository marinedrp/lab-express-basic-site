const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/",(req,res)=> {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/works",(req,res)=> {
    res.sendFile(__dirname + "/views/works.html")
})

app.get("/about",(req,res)=> {
    res.sendFile(__dirname + "/views/about.html")
})

app.listen(3005,() => {console.log("listening to port 3005")})

