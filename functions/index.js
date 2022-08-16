const functions = require("firebase-functions");
require("./src/database/connection");
const express = require("express")
const cors = require("cors")


const api = express();

api.use(express.json());
api.use(express.urlencoded({extended:true}));
api.use(cors());


api.use(require("./src/routers/routes"))


api.get("/test", (request, response)=>{
    response.send("welcome");
});






//const port = 3001;
//api.listen(port, () => console.log("server runing"));
exports.api = functions.https.onRequest(api);