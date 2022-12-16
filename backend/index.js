let express = require("express");
require('dotenv').config();
const userController = require("./routes/user.route");
const UserSlotController = require("./routes/schedule.route");
const connection = require("./Config/db");
const cors = require("cors");
const  authentication = require("./middlewares/authentication");

let app = express(); //server
let PORT = process.env.PORT || 8080;

app.use(express.json()) // parse
app.use(cors());

app.get("/", (req, res) => {
    res.send("Home page")
});

app.use("/user", userController);

app.use(authentication);

app.use("/schedule", UserSlotController);


app.listen(PORT, async() => {
    try{
        await connection
        console.log(`Listening at port ${PORT}`);
    }
    catch(err){
        console.log('Error occurred while running the server');
        console.log("err", err);
    }
})