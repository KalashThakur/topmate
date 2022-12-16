const {Router} = require("express");
const UserSlotController = Router();
const UserSlotModel = require("../models/Schedule.model")

//post
UserSlotController.post("/create", async(req, res) => {
    const {day, start, end} = req.body;
    const newSlot = new UserSlotModel({
        day,
        start,
        end
    });
    await newSlot.save();
    res.send({"message": "Added a new newSlot", newSlot})
});

module.exports = UserSlotController
