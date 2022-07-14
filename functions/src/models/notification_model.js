const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({

   _id: mongoose.Schema.Types.ObjectId,
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
    }
})


module.exports = mongoose.model("notifications", NotificationSchema);