const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    userAllowed: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Task", taskSchema);