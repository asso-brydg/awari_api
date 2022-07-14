const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({

   _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: false,
    },
    image:{
        type:String,
        required:false,
    },
    description:{
        type:String,
        required:false,
    },
    gallerie:{
        type:String,
        required:false,
    },
    videos:{
        type:String,
        required:false
    },
     city:{
        type:String,
        required:false
    },
    activity:{
        type:String,
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


module.exports = mongoose.model("sites", SiteSchema);