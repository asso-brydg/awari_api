const express = require("express");
const Country = require("./src/models/country_schema");
require("./src/database/connection");
const {Router} = require("express");
const { listeners } = require("./src/models/country_schema");

//const router = Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded());

const port = 3000;


app.listen(port, () => console.log("server runing"));


app.get('/', (request, response) => {

    response.send("Good for now and go dev creating dev branch");

})


app.post('/country/save',async(request, response) => {
    try{
        const { code, name, phoneCode } = request.body;
        const newCountry = await Country.create({ code, name, phoneCode });
        const saveCountry = newCountry.save();
        console.log('saved succesfully');
    }catch(err){
        console.log(err)
    }
})