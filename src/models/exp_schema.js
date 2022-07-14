const mongoose = require("mongoose");

const ExpSchema = new mongoose.Schema({

    IdExp: {
        type: String,
        required: true,
        unique:true
    },
    departureDate: {
        type: Date,
        required: true,
    },
    duration:{
        type:String,
        required:true,
    },
    notes:{
        type:String,
        required:true,
    },
    UniqPrice:{
        type:Number,
        required:true,
    },
    info:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    tripPlan:{
        type:Number,
        required:true
    },
    town:{
        type:String,
        required:true
    },
    stories:{
        type:String,
        required:true
    },
    activities:{
        type:String,
        required:true
    },
    vehicle:{
        type:Boolean,
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


module.exports = mongoose.model("experience", ExpSchema);