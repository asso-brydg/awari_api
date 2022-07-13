const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    IdUser: {
        type: String,
        required: true,
        unique:true
    },
    firstName: {
        type: String,
        required: true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    adress:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
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


module.exports = mongoose.model("user", userSchema);