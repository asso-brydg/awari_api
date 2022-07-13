const express = require("express");
const route = express.Router()
const controllerCountry = require("../controllers/controller_country")
const controllerTown = require("../controllers/controller_town")
const controllerCat = require("../controllers/controller_cat")
const controllerUser = require("../controllers/controller_user")


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

route.put('/town/update/:IdTown', controllerTown.update)

route.delete('/town/delete/:IdTown', controllerTown.delete)

route.get('/town/find', controllerTown.find)

route.get('/town/findOne/:IdTown', controllerTown.findOne)


//Routes pour catégories
route.post('/cat/save',controllerCat.create)

route.put('/cat/update/:IdCat',controllerCat.update)

route.delete('/cat/delete/:IdCat',controllerCat.delete)

route.get('/cat/find',controllerCat.find)

route.get('/cat/findOne/:IdCat',controllerCat.findOne)


//Routes pour catégories
route.post('/user/save',controllerUser.create)

route.put('/user/update/:IdUser',controllerUser.update)

route.delete('/user/delete/:IdUser',controllerUser.delete)

route.get('/user/find',controllerUser.find)

route.get('/user/findOne/:IdUser',controllerUser.findOne)


module.exports=route