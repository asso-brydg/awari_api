const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({

   _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: false,
    },
    featuredImage:{
        type:String,
        required:false,
    },
    excerpt:{
        type:String,
    },
    description:{
        type:String,
        required:false,
    },
    gallery:{
        type:[String],
        required:false,
    },
    videos:{
        type:[String],
        required:false
    },
    city_id:{
        type:String,
        required:false
    },
    activity_id:{
        type:[String],
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
    }
})


module.exports = mongoose.model("sites", SiteSchema);