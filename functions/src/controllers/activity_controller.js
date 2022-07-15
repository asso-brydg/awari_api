const { response } = require("express")
const mongoose = require("mongoose")
var Activity = require("../models/activity_model")

  //enrégistrer une ville dans bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }

    //TODO- Implémenter les vérification des données 
    //TODO- Compléter les autres attributs dans le constructeur
     //nouvelles activitiesegories
     const activity = new Activity({
        _id: new mongoose.Types.ObjectId,
        name:request.body.name, 
        description:request.body.description, 
        tags:request.body.tags, 
        price:request.body.price, 
        city_id:request.body. city_id, 
        duration:request.body.duration,
        stories:request.body.stories,
        note:request.body.note,
        vehicleIsAvailable:request.body.vehicleIsAvailable
    })

    //sauvegarder la activitiesegorie dans la db
    activity
        .save()
        .then(data=>{
            response.send(data)
        })
        .catch(err=>{
            console.log(err)
            response.status(500).send(err)
        })

}
//afficher la liste des activitieségories
exports.find = (request, response)=>{
    //rechercher la activitiesegorie
        Activity.find()
        .then(Activity=>{
            //afficher le resultat de la recherche
            response.send(Activity)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher une activitieségorie par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?._id){
        return response.status(400).send('erreur')
       }
    //rechercher la activitieségorie correspondant à l'id
       const activity = await Activity.findOne({ _id:request.params._id})
       if(!activity){
        response.send('No exist')
       }else{
        response.send(activity)
       }
}

exports.search= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    // if(!request?.params?._id){
    //     return response.status(400).send('erreur')
    //    }
    //rechercher la activitieségorie correspondant à l'id

    Activity
    .find(
        { $text : { $search : "kpalime" } }, 
        { score : { $meta: "textScore" } }
    )
    .sort({ score : { $meta : 'textScore' } })
    .exec(function(err, results) {
        response.send(results);
    });




    //    const activity = await Activity.findOne({ _id:request.params._id})
    //    if(!activity){
    //     response.send('No exist')
    //    }else{
    //     response.send(activity)
    //    }
}



//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?._id){
    return response.status(400).send('erreur')
   }
   // rechercher la activitieségorie correspondante à l'id
   const activity = await Activity.findOne({ _id:request.params._id}).exec()
   if(!activity){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de la activitieségorie trouvée plus haut
    activity._id = request.body._id,
    activity.type = request.body.type, 
    activity.price = request.body.price, 
    activity.city_id = request.body.city_id, 
    activity.plan = request.body.plan,
    activity.duration = request.body.duration,
    activity.stories = request.body.stories,
    activity.note = request.body.note,
    activity.vehicleAvailability = request.body.vehicleAvailability
    activity.updatedAt = new Date()
    const resultat = await activity.save()
    response.send(resultat)
   }
}
//supprimer une activitieségorie
exports.delete= async (request, response)=>{
    if(!request?.params?._id){
        return response.status(400).send('erreur')
    }
    const activity = await Activity.findOne({ _id:request.params._id})
    if(!activity){
        response.send("no exist")
    }else{
        activity.delete()
        response.send('suppression réussie')
    }
} 