const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
    },
    featuredImage:{
        type:String,
    },
    description:{
        type:String,
    },
    excerpt:{
        type:String,
    },
    gallery:{
        type:[String],
    },
    tags:{
        type:[String],    
    },
   createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },

})

CategorySchema.index({name: 'text', description: "text", tags:"text", excerpt:"text", description:"text"});


module.exports = mongoose.model("categories", CategorySchema);