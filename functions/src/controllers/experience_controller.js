const { response } = require("express")
var Experience = require("../models/experience_model")

  //enrégistrer un utilisateur dans la bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvel utilisateur
     const experience = new Experience({
        _id:request.body._id,
        departureDate:request.body.departureDate, 
        duration:request.body.duration, 
        notes:request.body.notes, 
        price:request.body.price, 
        info:request.body.info,
        type:request.body.type,
        tripPlan:request.body.tripPlan,
         city_id:request.body. city_id,
        stories:request.body.stories,
        activity:request.body.activity,
        vehicleAvailability:request.body.vehicleAvailability
    })

    //sauvegarder l'utilisateur dans la db
    experience
        .save()
        .then(data=>{
            response.send(data)
        })
        .catch(err=>{
            response.status(500).send(err)
        })

}
//afficher la liste des utilisateurs
exports.find = (request, response)=>{
    //rechercher la categorie
        Experience.find()
        .then(Experience=>{
            //afficher le resultat de la recherche
            response.send(Experience)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher un utilisateur par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?._id){
        return response.status(400).send('erreur')
       }
    //rechercher l'utilisateur correspondant à l'id
       const experience = await Experience.findOne({_id:request.params._id})
       if(!experience){
        response.send('No exist')
       }else{
        response.send(experience)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?._id){
    return response.status(400).send('erreur')
   }
   // rechercher l'utilisateur correspondante à l'id
   const experience = await Experience.findOne({ _id:request.params._id}).exc()
   if(!experience){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de l'utilisateur trouvée plus haut
    experience._id = request.body._id,
    experience.departureDate = request.body.departureDate, 
    experience.duration = request.body.duration, 
    experience.notes = request.body.notes, 
    experience.price = request.body.price, 
    experience.type = request.body.type,
    experience.city_id=request.body.city_id,
    experience.tripPlan = request.body.tripPlan,
    experience.stories = request.body.stories,
    experience.activity_id = request.body.activity_id,
    experience.vehicleAvailability = request.body.vehicleAvailability,
    experience.updatedAt = new Date()
    const resultat = await experience.save()
    response.send(resultat)
   }
}
//supprimer un utilisateur
exports.delete= async (request, response)=>{
    if(!request?.params?._id){
        return response.status(400).send('erreur')
    }
    const experience = await Experience.findOne({_id:request.params._id})
    if(!experience){
        response.send("no exist")
    }else{
        experience.delete()
        response.send('suppression réussie')
    }
} 