const mongoose = require("mongoose");


const CountrySchema = new mongoose.Schema({

    code: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    phoneCode: {
        type: Number,
        required: true,
    },

    createdAt: {
        type: Date,
        required: true,
        default: new Date()
    },

    updatedAt: {
        type: Date,
        required: true,
        default: new Date()
    },


})


module.exports = mongoose.model("countries", CountrySchema);