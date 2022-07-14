const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({

    IdActivity: {
        type: String,
        required: true,
        unique:true
    },
    type: {
        type: String,
        required: true,
    },
    UniqPrice:{
        type:Number,
        required:true,
    },
    town:{
        type:String,
        required:true,
    },
    plan:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:true
    },
    stories:{
        type:String,
        required:true
    },
    note:{
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


module.exports = mongoose.model("activities", activitySchema);