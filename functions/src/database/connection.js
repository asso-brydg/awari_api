const mongoose = require("mongoose")
const constants = require("../constants/constants")


const uri = `mongodb+srv://awari_db_2022:${constants["MONGO_DB_PASSWORD"]}@awari.rpe58we.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri).then((value) => {
    console.log("Database is connected")
}).catch((error) => {
    console.log("Something went wrong", error, constants)
})