const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    _id:  mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    adress: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: false,
        default: new Date()
    },

    updatedAt: {
        type: Date,
        required: false,
        default: new Date()
    },

})


module.exports = mongoose.model("user", userSchema);