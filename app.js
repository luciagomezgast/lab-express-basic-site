const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")

})

app.get("/about", (req, res)=>{
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/protagonistas", (req, res)=>{
    res.sendFile(__dirname + "/views/protagonistas.html")
})

app.get("/photo", (req, res)=>{
    res.sendFile(__dirname + "/views/photo.html")
})
   



app.listen(3000, ()=>{
    console.log("escuchando puerto 3000");
});