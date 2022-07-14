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
route.post('/countries', CountryController.create)

route.put('/countries/update/:_id', CountryController.update)

route.delete('/countries/delete/:_id', CountryController.delete)

route.get('/countries/index', CountryController.find)

route.get('/countries/find-one/:_id', CountryController.findOne)


//Routes pour ville
route.post('/ cities', CityController.create)

route.put('/ cities/update/:_id', CityController.update)

route.delete('/ cities/delete/:_id', CityController.delete)

route.get('/ cities/index', CityController.find)

route.get('/ cities/find-one/:_id', CityController.findOne)


//Routes pour catégories
route.post('/categories',CategoryController.create)

route.put('/categories/update/: _id',CategoryController.update)

route.delete('/categories/delete/: _id',CategoryController.delete)

route.get('/categories/index',CategoryController.find)

route.get('/categories/find-one/: _id',CategoryController.findOne)


//Routes pour utilisateurs
route.post('/users',UserController.create)

route.put('/users/update/: _id',UserController.update)

route.delete('/users/delete/: _id',UserController.delete)

route.get('/users/index',UserController.find)

route.get('/users/find-one/: _id',UserController.findOne)


//Routes pour utilisateurs
route.post('/notifications',NotificationController.create)

route.put('/notifications/update/:_id',NotificationController.update)

route.delete('/notifications/delete/:_id',NotificationController.delete)

route.get('/notifications/index',NotificationController.find)

route.get('/notifications/find-one/:_id',NotificationController.findOne)


//Routes pour les activités
route.post('/activities',ActivitiesController.create)

route.put('/activities/update/:_id',ActivitiesController.update)

route.delete('/activities/delete/:_id',ActivitiesController.delete)

route.get('/activities/index',ActivitiesController.find)

route.get('/activities/find-one/:_id',ActivitiesController.findOne)


//Routes pour les expériences
route.post('/experiences',ExperienceController.create)

route.put('/experiences/update/:_id',ExperienceController.update)

route.delete('/experiences/delete/:_id',ExperienceController.delete)

route.get('/experiences/index',ExperienceController.find)

route.get('/experiences/find-one/:_id',ExperienceController.findOne)


//Routes pour les reservations
route.post('/reservations',ReservationController.create)

route.put('/reservations/update/:_id',ReservationController.update)

route.delete('/reservations/delete/:_id',ReservationController.delete)

route.get('/reservations/index',ReservationController.find)

route.get('/reservations/find-one/:_id',ReservationController.findOne)



//Routes pour les sites
route.post('/sites',SiteController.create)

route.put('/sites/update/:_id',SiteController.update)

route.delete('/sites/delete/:_id',SiteController.delete)

route.get('/sites/index',SiteController.find)

route.get('/sites/find-one/:_id',SiteController.findOne)


module.exports=route