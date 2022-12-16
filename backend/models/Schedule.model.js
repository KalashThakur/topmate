const mongoose = require("mongoose");

const userSlotsSchema = new mongoose.Schema({
     day: {type: String, required: true},
     start: {type: Date, required: true},
     end: {type: Date, required: true},
});

const UserSlotModel = mongoose.model("schedule", userSlotsSchema);

module.exports = UserSlotModel;