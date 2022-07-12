const express = require("express");
const Country = require("./src/models/country_schema");
const Town = require("./src/models/town_schema");
require("./src/database/connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(require("./src/routers/routes"))
const port = 3000;


app.listen(port, () => console.log("server runing"));


/*app.get('/', (request, response) => {
    response.send("Good for now and go dev creating dev branch");
})


app.post('/country/save',async(request, response) => {
//récupérer les attributs de la requête
        const { code, name, phoneCode, image, description, gallerie } = request.body;
        // verifier si le pays existe déjà
        const countryFind = await Country.findOne({$or:[{code}]})
        if(countryFind){
            //si oui....
            response.status(400).send('Ce pays existe déjà!!')
        }else{
            //si non on l'enrégistre
            const newCountry = await Country.create({ code, name, phoneCode, image, description, gallerie  });
            const saveCountry = newCountry.save();
        }
        console.log('country saved succesfully');
})

app.get('/country/get', async(request, response)=>{
    //récupérer tous les pays dans la base de données
    const listPays = await Country.find({})
    response.send(listPays)
})

app.delete('/country/delete', async (request, response)=>{
    const codePays = await request.body.code
    const pays = await Country.findOne({code:{codePays}})
    if(pays){
        pays.delete()
        response.send('suppression réussie')
    }
    else{
        response.send("le pays n'existe pas")
    }
   
})

app.post('/town/save',async(request, response) => {
    const { idTown, name, country, image, description, gallerie } = request.body;
    const TownFind = await Country.findOne({$or:{idTown}})
    const  countryFindTowwn = await Country.findOne({code:{country}})
    if(TownFind){
            response.status(400).send('Cette ville existe déjà!!')
    }else{
        if(countryFindTowwn){
            const newTown = await Town.create({ idTown, name, country, image, description, gallerie  });
            const saveCountry = newTown.save();
        }else{
            response.status(400).send("Ce pays n'existe pas")
        }
    }
    console.log('town saved succesfully');
})*/