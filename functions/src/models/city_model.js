const mongoose = require("mongoose");
const CitySchema = new mongoose.Schema({
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
    country_id:{
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
    }
})

CitySchema.index({name: 'text', description: "text", excerpt:"text", description:"text"});

module.exports = mongoose.model("cities", CitySchema);