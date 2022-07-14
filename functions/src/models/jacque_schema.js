const mongoose = require("mongoose");



const JacqueSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    }
});




module.exports = mongoose.model("jacques", JacqueSchema);