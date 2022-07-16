const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({

   _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String
    },
    departureDate: {
        type: Date,
        required: false,
    },
    excerpt:{
        type:String,
    },
    description:{
        type:String,
    },
    duration:{
        type:Number,
        required:false,
    },
    notes:{
        type:Number,
        required:false,
    },
    numberVotes:{
        type:Number,
        required:false,
    },
    featuredImage:{
        type:String,
    },
    gallery:{
        type:[String],
    },
    tags:{
        type:[String],
    },
    price:{
        type:Number,
        required:false,
    },
    type:{
        type:String,
        required:false
    },
    meetingAdress: {
        type: Date,
    },
     city_id:{
        type:[String],
        required:false
    },
    stories:{
        type:[String],
        required:false
    },
    activity_id:{
        type:[String],
        required:false
    },
    vehicleIsAvailable:{
        type:Boolean,
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


ExperienceSchema.index({name: 'text', description: "text", excerpt:"text", tags:"text"});


module.exports = mongoose.model("experiences", ExperienceSchema);