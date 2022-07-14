const mongoose = require("mongoose");

const ActivtySchema = new mongoose.Schema({
//TODO - Ajouter les options required
    _id:  mongoose.Schema.Types.ObjectId,
    type: {
        type: String,
        required: false,
    },
    uniqPrice:{
        type:Number,
        required:false,
    },
    city:{
        type:String,
        required:false,
    },
    
    plan:{
        type:String,
        required:false,
    },
    duration:{
        type:String,
        required:false
    },
    stories:{
        type:String,
        required:false
    },
    note:{
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


module.exports = mongoose.model("activities", ActivtySchema);