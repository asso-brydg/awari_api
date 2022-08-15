const mongoose = require("mongoose");
const CitySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: false,
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
    country_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'countries',
        required: false
    },
   createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        required: false,
        default: new Date()
    }
})

CitySchema.index({name: 'text', description: "text", excerpt:"text", description:"text"});

module.exports = mongoose.model("cities", CitySchema);