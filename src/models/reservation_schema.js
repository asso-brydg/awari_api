const mongoose = require("mongoose");

const ResSchema = new mongoose.Schema({

    IdRes: {
        type: String,
        required: true,
        unique:true
    },
    meetingPlace:{
        type:String,
        required:true,
    },
    amount:{
        type:Float,
        required:true,
    },
    numberPersonne:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    activities:{
        type:String,
        required:true
    },
    payementDay:{
        type:Date,
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


module.exports = mongoose.model("reservation", ResSchema);