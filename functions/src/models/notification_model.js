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
   sentAt: {
        type: Date,
        required: false,
        default: new Date()
    },
    user:{
        type:String,
        required:false
    },

    sender_id:{
        type:String,
        required:false
    }

    //todo - Ajouter created at updated at
})


module.exports = mongoose.model("notifications", NotificationSchema);