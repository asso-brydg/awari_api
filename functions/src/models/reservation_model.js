const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
    meetingPlace:{
        type:String,
        required:false,
    },
    price:{
        type:Number,
        required:false,
    },
    numberPerson:{
        type:Number,
        required:false,
    },
    type:{
        type:String,
        required:false
    },
   /* type_id:{
        type:[String],
        required:false
    },*/
    payementDay:{
        type:Date,
        required:false
    },
    payementDone:{
        type:Boolean,
    },
    tripCanceled:{
        type:Boolean
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


module.exports = mongoose.model("reservations", ReservationSchema);