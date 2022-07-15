const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema({
    //TODO- Ajouter invitedUsers dans les attributs de la classe
   _id: mongoose.Schema.Types.ObjectId,
    meetingPlace:{
        type:String,
        required:false,
    },
    price:{
        type:Number,
        required:false,
    },
    //Todo - Vérifier si le les attributs sont conformes dans le controller
    numberPerson:{
        type:Number,
        required:false,
    },
    status:{
        type:String,
        required:false
    },
    type:{
        type:String,
        required:false
    },
    type_id:{
        type:[String],
        required:false
    },
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