const mongoose = require("mongoose");

const catSchema = new mongoose.Schema({

    IdCat: {
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
    tags:{
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


module.exports = mongoose.model("categorie", catSchema);