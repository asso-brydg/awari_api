const mongoose = require("mongoose");


const CountrySchema = new mongoose.Schema({

    code: {
        type: String,
        required: false,
        maxLength:2,
        unique:false
    },

    name: {
        type: String,
        required: false,
    },

    phoneCode: {
        type: Number,
        required: false,
        unique:false
    },
    image:{
        type:String,
        required:false,
    },
    description:{
        type:String,
        required:false,
    },
    gallerie:{
        type:String,
        required:false,
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


module.exports = mongoose.model("countries", CountrySchema);