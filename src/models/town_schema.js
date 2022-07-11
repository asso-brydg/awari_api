const mongoose = require("mongoose");

const TownSchema = new mongoose.Schema({

    IdTown: {
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
    country:{
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


module.exports = mongoose.model("town", TownSchema);