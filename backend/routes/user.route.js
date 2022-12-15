const {Router} = require("express");
const bcrypt = require('bcrypt');
const userController = Router();
const UserModel = require("../models/User.model")
var jwt = require('jsonwebtoken');

//SIGNUP
userController.post("/signup", (req, res) => {
    const {email, password, age} = req.body;
    bcrypt.hash(password, 5, async(err, hash) => {
        if(err) {
            res.send("Login failed")
        }
        else{
            const user = new UserModel({
                email,
                password: hash,
                age
            })
            try{
                await user.save();
                res.json({msg: "Signup successfull"})
            }catch(err){
                console.log("err:", err);
                res.send("Somethig went wrong")
            }
        }
    });
})

//LOGIN
userController.post("/login", async(req, res) => {
    const {email, password} = req.body;
   const user = await UserModel.findOne({email})

   if(!user) {
     res.send("Wrong credentials");
   }

   const hash = user.password;
   const userId = user._id;

   bcrypt.compare(password, hash, function(err, result) {
    if(result){
        var token = jwt.sign({ email,userId }, process.env.KEY);
        res.send({"message" :"login successful", "token": token})
    }
    else{
        res.send("Wrong credentials");
    }
   });
})


module.exports = userController;