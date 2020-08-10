const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    newsId: {
        type: String,
        required: true,
    },
    titleTH: {
        type: String,
        require: String
    },
    titleEN: {
        type: String,
        require: String
    },
    detailTH: {
        type: String,
        require: String
    },
    detailEN: {
        type: String,
        require: String
    },
    project: {
        type: String,
        require: String
    },
    startDate: {
        type: Date
    },
    stopDate: {
        type: Date
    },
});

module.exports = mongoose.model("news", userSchema);