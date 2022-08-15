const mongoose = require("mongoose");
const CountrySchema = new mongoose.Schema({
    _id:  mongoose.Schema.Types.ObjectId,
    code: {
        type: String,
        required: false,
        maxLength:2,
        unique:true
    },
    name: {
        type: String,
        required: false,
    },
    phoneCode: {
        type: Number,
        required: false,
        unique:false
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

CountrySchema.index({name: 'text', code: "text", excerpt:"text", description:"text",phoneCode:"text"});

module.exports = mongoose.model("countries", CountrySchema);