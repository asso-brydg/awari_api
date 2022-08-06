const { response } = require("express")
const mongoose = require("mongoose")
var Activity = require("../models/activity_model")

  //enrégistrer une activité dans bd
exports.create = (activityObject)=>{
    if(!activityObject){
        response.status(400).send('Valeurs vide')
        return
    }

    //TODO- Implémenter les vérification des données 
    //TODO- Compléter les autres attributs dans le constructeur
     //nouvelles activités
     const activity = new Activity({
        _id: new mongoose.Types.ObjectId,
        name:activityObject.name, 
        excerpt:activityObject.excerpt, 
        description:activityObject.description, 
        featuredImage:activityObject.featuredImage, 
        location:activityObject.location, 
        gallery:activityObject.gallery, 
        tags:activityObject.tags, 
        departureDate:activityObject.departureDate, 
        meetingAdress:activityObject.meetingAdress, 
        price:activityObject.price, 
        city_id:activityObject. city_id, 
       // plan:activityObject. plan, 
        duration:activityObject.duration,
        stories:activityObject.stories,
        note:activityObject.note,
        vehicleIsAvailable:activityObject.vehicleIsAvailable
    })

    //sauvegarder l'activité dans la db
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
//afficher la liste des activités
exports.find = (request, response)=>{
    //rechercher l'activité
        Activity.find()
        .then(Activity=>{
            //afficher le resultat de la recherche
            response.send(Activity)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher une activité par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?._id){
        return response.status(400).send('erreur')
       }
    //rechercher l'activité correspondant à l'id
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
    //rechercher l'activité correspondant à l'id
    const req = request.body.index
    console.log(req)
    Activity
    .find(
        { $text : { $search : req } }, 
        { score : { $meta: "textScore" } }
    )
    .sort({ score : { $meta : 'textScore' } })
    .exec(function(err, results) {
        response.send(results);

    });


}



//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?._id){
    return response.status(400).send('erreur')
   }
   // rechercher l'activité correspondante à l'id
   const activity = await Activity.findOne({ _id:request.params._id}).exec()
   if(!activity){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de l'activité trouvée plus haut
    activity.name = request.body.name, 
    activity.excerpt = request.body.excerpt, 
    activity.description = request.body.description, 
    activity.featuredImage = request.body.featuredImage, 
    activity.location = request.body.location, 
    activity.gallery = request.body.gallery, 
    activity.tags = request.body.tags, 
    activity.departureDate = request.body.departureDate, 
    activity.meetingAdress = request.body.meetingAdress, 
    activity.price = request.body.price, 
    activity.city_id = request.body.city_id, 
    activity.plan = request.body.plan,
    activity.duration = request.body.duration,
    activity.stories = request.body.stories,
    activity.note = request.body.note,
    activity.vehicleIsAvailable = request.body.vehicleIsAvailable
    activity.updatedAt = new Date()
    const resultat = await activity.save()
    response.send(resultat)
   }
}
//supprimer une activité
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