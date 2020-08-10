const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: String
    },
    firstName: {
        type: String,
        require: String
    },
    lastName: {
        type: String,
        require: String
    },
    phoneNumber: {
        type: String,
        require: String
    },
    project: {
        type: String,
        require: String
    },
    readNews: {
        type: Array
    }
});

module.exports = mongoose.model("users", userSchema);