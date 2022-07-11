const express = require("express");
const Country = require("./src/models/country_schema");
require("./src/database/connection");


const app = express();

const port = 3000;





app.listen(port, () => console.log("server runing"));


app.get('/', (request, response) => {

    response.send("Good for now and go dev creating dev branch");

})


app.post("/country/save", async(request, response) => {
    // const { code, name, phoneCode } = request.body;
    // const newCountry = await Country.create({ code, name, phoneCode });
    // const saveCountry = newCountry.save();
    console.log(request.body);
    response.send(request.body);
})