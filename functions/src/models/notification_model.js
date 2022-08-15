const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({

   _id: mongoose.Schema.Types.ObjectId,
   title:{
         type:String,
         required:false
    },
    content: {
        type: String,
        required: false,
    },
    receiver_id:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'user',
        required:false
    },

    sender_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
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

    //todo - Ajouter created at updated at
})


module.exports = mongoose.model("notifications", NotificationSchema);