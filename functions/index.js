const functions = require("firebase-functions");
require("./src/database/connection");
const swaggerUi = require("swagger-ui-express")
const express = require("express")
const cors = require("cors")


const api = express();

api.use(express.json());
api.use(express.urlencoded());
api.use(cors());


api.use(require("./src/routers/routes"))


api.get("/test", (request, response)=>{
    response.send("On va voir !!!!!!!!!!!!!!!!!!!!!");
});




 




const port = 3000;
api.listen(port, () => console.log("server runing"));




exports.api = functions.https.onRequest(api);