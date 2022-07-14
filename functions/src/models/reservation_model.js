const mongoose = require("mongoose");

const ResSchema = new mongoose.Schema({

   _id: mongoose.Schema.Types.ObjectId,
    meetingPlace:{
        type:String,
        required:false,
    },
    amount:{
        type:Number,
        required:false,
    },
    numberPersonne:{
        type:Number,
        required:false,
    },
    status:{
        type:String,
        required:false
    },
    startDate:{
        type:Date,
        required:false
    },
    activity:{
        type:String,
        required:false
    },
    payementDay:{
        type:Date,
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


module.exports = mongoose.model("reservation", ResSchema);