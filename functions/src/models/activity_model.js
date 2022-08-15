const mongoose = require("mongoose");
const ActivtySchema = new mongoose.Schema({
//TODO - Ajouter les options required
    _id:  mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
    },
    excerpt:{
        type:String,
    },
    description:{
        type:String,
    },
    featuredImage:{
        type:String,
    },
    // Adresse, ville etc .
    location:{
        type:String,
    },
   
    gallery: {
        type: [String],
    },
    tags: {
        type: [String],
    },
    departureDate: {
        type: Date,
    },
    meetingAdress: {
        type: String,
    },
    price:{
        type:Number,
    },
    city_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cities',
    },
   /* plan:{
        type:String,
    },*/
    //Convertir en heure ou en jour 
    duration:{
        type:Number,
    },
    stories:{
        type:[String],
    },
    note:{
        type:Number,
        required:false
    },
    vehicleIsAvailable:{
        type:Boolean,
        required:false
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



// ActivtySchema.index({'loc': '2dsphere'});
// ActivtySchema.index({'loc': '2d'});


ActivtySchema.index({name: 'text', tags:"text", excerpt:"text", description:"text"});


module.exports = mongoose.model("activities", ActivtySchema);