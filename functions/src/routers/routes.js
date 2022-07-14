const express = require("express");
const route = express.Router()
const CountryController = require("../controllers/country_controller")
const CityController = require("../controllers/city_controller")
const CategoryController = require("../controllers/category_controller")
const UserController = require("../controllers/user_controller")
const NotificationController = require("../controllers/notification_controller")
const ActivitiesController = require("../controllers/activity_controller")
const ExperienceController = require("../controllers/experience_controller")
const ReservationController = require("../controllers/reservation_controller")
const SiteController = require("../controllers/site_controller")
const JacqueController = require("../controllers/jacque_controller")




//Home page
route.get('/', (request, response) => {
    response.send("Good for now and go dev creating dev branch");
})

route.post('/jacques', JacqueController.create)
route.get('/jacques', JacqueController.index)


//Routes pour le pays
route.post('/country', CountryController.create)

route.put('/country/update/:_id', CountryController.update)

route.delete('/country/delete/:_id', CountryController.delete)

route.get('/country/index', CountryController.find)

route.get('/country/find-one/:_id', CountryController.findOne)


//Routes pour ville
route.post('/ city', CityController.create)

route.put('/ city/update/:_id', CityController.update)

route.delete('/ city/delete/:_id', CityController.delete)

route.get('/ city/index', CityController.find)

route.get('/ city/find-one/:_id', CityController.findOne)


//Routes pour catégories
route.post('/category',CategoryController.create)

route.put('/category/update/: _id',CategoryController.update)

route.delete('/category/delete/: _id',CategoryController.delete)

route.get('/category/index',CategoryController.find)

route.get('/category/find-one/: _id',CategoryController.findOne)


//Routes pour utilisateurs
route.post('/user',UserController.create)

route.put('/user/update/: _id',UserController.update)

route.delete('/user/delete/: _id',UserController.delete)

route.get('/user/index',UserController.find)

route.get('/user/find-one/: _id',UserController.findOne)


//Routes pour utilisateurs
route.post('/notification',NotificationController.create)

route.put('/notification/update/:_id',NotificationController.update)

route.delete('/notification/delete/:_id',NotificationController.delete)

route.get('/notification/index',NotificationController.find)

route.get('/notification/find-one/:_id',NotificationController.findOne)


//Routes pour les activités
route.post('/activities',ActivitiesController.create)

route.put('/activity/update/:_id',ActivitiesController.update)

route.delete('/activity/delete/:_id',ActivitiesController.delete)

route.get('/activity/index',ActivitiesController.find)

route.get('/activity/find-one/:_id',ActivitiesController.findOne)


//Routes pour les expériences
route.post('/experience',ExperienceController.create)

route.put('/experience/update/:_id',ExperienceController.update)

route.delete('/experience/delete/:_id',ExperienceController.delete)

route.get('/experience/index',ExperienceController.find)

route.get('/experience/find-one/:_id',ExperienceController.findOne)


//Routes pour les reservations
route.post('/reservation',ReservationController.create)

route.put('/reservation/update/:_id',ReservationController.update)

route.delete('/reservation/delete/:_id',ReservationController.delete)

route.get('/reservation/index',ReservationController.find)

route.get('/reservation/find-one/:_id',ReservationController.findOne)



//Routes pour les sites
route.post('/site',SiteController.create)

route.put('/site/update/:_id',SiteController.update)

route.delete('/site/delete/:_id',SiteController.delete)

route.get('/site/index',SiteController.find)

route.get('/site/find-one/:_id',SiteController.findOne)


module.exports=route