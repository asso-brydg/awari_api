const express = require("express");
const route = express.Router()
const controllerCountry = require("../controllers/controller_country")
const controllerTown = require("../controllers/controller_town")


//Home page
route.get('/', (request, response) => {
    response.send("Good for now and go dev creating dev branch");
})

//Routes pour le pays
route.post('/country/save', controllerCountry.create)

route.put('/country/update/:code', controllerCountry.update)

route.delete('/country/delete/:code', controllerCountry.delete)

route.get('/country/find', controllerCountry.find)

route.get('/country/findOne/:code', controllerCountry.findOne)


//Routes pour ville
route.post('/town/save', controllerTown.create)

route.put('/town/update/:idTown', controllerTown.update)

route.delete('/town/delete/:idTown', controllerTown.delete)

route.get('/town/find', controllerTown.find)

route.get('/town/findOne/:idTown', controllerTown.findOne)


module.exports=route