const express = require("express");
const route = express.Router()
const controllerCountry = require("../controllers/controller_country")
const controllerTown = require("../controllers/controller_town")
const controllerCat = require("../controllers/controller_cat")
const controllerUser = require("../controllers/controller_user")
const controllerNotifs = require("../controllers/controller_notifs")
const controllerActivities = require("../controllers/controller_activities")
const controllerExp = require("../controllers/controller_exp")
const controllerRes = require("../controllers/controller_res")
const controllerSite = require("../controllers/controller_site")
const JacqueController = require("../controllers/jacque_controller")




//Home page
route.get('/', (request, response) => {
    response.send("Good for now and go dev creating dev branch");
})

route.post('/jacques', JacqueController.create)
route.get('/jacques', JacqueController.index)


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


//Routes pour utilisateurs
route.post('/user/save',controllerUser.create)

route.put('/user/update/:IdUser',controllerUser.update)

route.delete('/user/delete/:IdUser',controllerUser.delete)

route.get('/user/find',controllerUser.find)

route.get('/user/findOne/:IdUser',controllerUser.findOne)


//Routes pour utilisateurs
route.post('/notifs/save',controllerNotifs.create)

route.put('/notifs/update/:IdNotifs',controllerNotifs.update)

route.delete('/notifs/delete/:IdNotifs',controllerNotifs.delete)

route.get('/notifs/find',controllerNotifs.find)

route.get('/notifs/findOne/:IdNotifs',controllerNotifs.findOne)


//Routes pour les activités
route.post('/activities/save',controllerActivities.create)

route.put('/activities/update/:IdNotifs',controllerActivities.update)

route.delete('/activities/delete/:IdNotifs',controllerActivities.delete)

route.get('/activities/find',controllerActivities.find)

route.get('/activities/findOne/:IdNotifs',controllerActivities.findOne)


//Routes pour les expériences
route.post('/exp/save',controllerExp.create)

route.put('/exp/update/:IdExp',controllerExp.update)

route.delete('/exp/delete/:IdExp',controllerExp.delete)

route.get('/exp/find',controllerExp.find)

route.get('/exp/findOne/:IdExp',controllerExp.findOne)


//Routes pour les reservations
route.post('/res/save',controllerRes.create)

route.put('/res/update/:IdExp',controllerRes.update)

route.delete('/res/delete/:IdExp',controllerRes.delete)

route.get('/res/find',controllerRes.find)

route.get('/res/findOne/:IdExp',controllerRes.findOne)



//Routes pour les sites
route.post('/site/save',controllerSite.create)

route.put('/site/update/:IdExp',controllerSite.update)

route.delete('/site/delete/:IdExp',controllerSite.delete)

route.get('/site/find',controllerSite.find)

route.get('/site/findOne/:IdExp',controllerSite.findOne)


module.exports=route