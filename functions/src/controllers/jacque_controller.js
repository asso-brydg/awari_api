const mongoose = require("mongoose");

const Jacque = require('../models/jacque_schema')
const ResponseModel   = require("../models/response_model");

exports.create =  (request, response) => {
    const jacque = new Jacque({
       _id: new mongoose.Types.ObjectId,
        age: "Cahrles",

    });

    

    jacque.save().then((result)=>{


        // const response = new ResponseModel();
        // response.message = "Good";
        // response.data = result;

        var data = {
            "message": "Good",
            "type": "SUCCESS",
            "data": result,
        }

        response.send(data);


    }).catch((error)=>{
    
        var type = "";
        if (error["name"] == "ValidationError") {
            type = "ERREUR_VALIDATION"
        }

        var data = {
            "message": "Vos données sont incorrectes",
            "type": type,
            data: error['errors'],
        }


        response.status(400).send(data);
    })
    
}

exports.index = (request, response) => {
    response.send("nothing here")
}