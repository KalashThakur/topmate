let express = require("express");
require('dotenv').config();

let app = express(); //server
let PORT = process.env.PORT || 8080;

app.use(express.json()) // parse

app.get("/", (req, res) => {
    res.send("Home page")
});

app.listen(PORT, (req,res) => {
    
})