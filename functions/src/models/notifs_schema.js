const mongoose = require("mongoose");

const NotifsSchema = new mongoose.Schema({

    IdNotifs: {
        type: String,
        required: true,
        unique:true
    },
    content: {
        type: String,
        required: true,
    },
   sentAt: {
        type: Date,
        required: true,
        default: new Date()
    },
    user:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("notifs", NotifsSchema);