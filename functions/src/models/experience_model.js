const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({

   _id: mongoose.Schema.Types.ObjectId,
    departureDate: {
        type: Date,
        required: false,
    },
    duration:{
        type:String,
        required:false,
    },
    notes:{
        type:String,
        required:false,
    },
    uniqPrice:{
        type:Number,
        required:false,
    },
    info:{
        type:String,
        required:false
    },
    type:{
        type:String,
        required:false
    },
    tripPlan:{
        type:Number,
        required:false
    },
     city:{
        type:String,
        required:false
    },
    stories:{
        type:String,
        required:false
    },
    activity:{
        type:String,
        required:false
    },
    vehicleAvailability:{
        type:Boolean,
        required:false
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


module.exports = mongoose.model("experiences", ExperienceSchema);