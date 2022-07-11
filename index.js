const express = require("express");
const Country = require("./src/models/country_schema");
const Town = require("./src/models/town_schema");
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

        const { code, name, phoneCode, image, description, gallerie } = request.body;
        const countryFind = await Country.findOne({$or:[{code}]})
        if(countryFind){
            response.status(400).send('Ce pays existe déjà!!')
        }else{
            const newCountry = await Country.create({ code, name, phoneCode, image, description, gallerie  });
            const saveCountry = newCountry.save();
        }
        console.log('country saved succesfully');
})

app.get('/country/get', async(request, response)=>{
    const listPays = await Country.find({})
    response.send(listPays)
})

app.post('/town/save',async(request, response) => {
    const { idTown, name, country, image, description, gallerie } = request.body;
    const TownFind = await Country.findOne({$or:[{idTown}]})
    const  countryFindTowwn = await Country.findOne({$where:{code:country}})
    if(TownFind){
            response.status(400).send('Cette ville existe déjà!!')
    }else{
        if(countryFindTown){
            const newTown = await Town.create({ idTown, name, country, image, description, gallerie  });
            const saveCountry = newTown.save();
        }else{
            response.status(400).send('Ce pays n"existe pas')
        }
    }
    console.log('town saved succesfully');
})