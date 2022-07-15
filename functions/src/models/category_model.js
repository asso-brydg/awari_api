const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: false,
    },
    featuredImage:{
        type:String,
        required:false,
    },
    description:{
        type:String,
        required:false,
    },
    excerpt:{
        type:String,
    },
    gallery:{
        type:[String],
        required:false,
    },
    tags:{
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
    },

})


module.exports = mongoose.model("categories", CategorySchema);