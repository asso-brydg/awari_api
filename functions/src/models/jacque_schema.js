const mongoose = require("mongoose");



const JacqueSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: false,
    },

    age: {
        type: Number,
        required: false,
    }
});




module.exports = mongoose.model("jacques", JacqueSchema);