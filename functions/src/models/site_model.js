const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema({

   _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
    },
    featuredImage:{
        type:String,
    },
    excerpt:{
        type:String,
    },
    description:{
        type:String,
    },
    gallery:{
        type:[String],
    },
    tags:{
        type:[String],
    },
    videos:{
        type:[String],
    },
    city_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cities',
    },
    activity_id:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'activities',
    },
   createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
})

SiteSchema.index({name: 'text', description: "text", excerpt:"text", tags:"text"});

module.exports = mongoose.model("sites", SiteSchema);