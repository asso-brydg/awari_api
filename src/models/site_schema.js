const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({

    IdSite: {
        type: String,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    gallerie:{
        type:String,
        required:true,
    },
    videos:{
        type:String,
        required:true
    },
    town:{
        type:String,
        required:true
    },
    activities:{
        type:String,
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


module.exports = mongoose.model("site", SiteSchema);