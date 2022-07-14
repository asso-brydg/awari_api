const { response } = require("express")
var Activities = require("../models/activities_schema")

  //enrégistrer une ville dans bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvelles activitiesegories
     const activities = new Activities({
        IdActivity:request.body.IdActivity,
        type:request.body.type, 
        UniqPrice:request.body.UniqPrice, 
        town:request.body.town, 
        plan:request.body.plan,
        duration:request.body.duration,
        stories:request.body.stories,
        note:request.body.note,
        vehicle:request.body.vehicle
    })

    //sauvegarder la activitiesegorie dans la db
    activities
        .save()
        .then(data=>{
            response.send(data)
        })
        .catch(err=>{
            response.status(500).send(err)
        })

}
//afficher la liste des activitieségories
exports.find = (request, response)=>{
    //rechercher la activitiesegorie
        Activities.find()
        .then(Activities=>{
            //afficher le resultat de la recherche
            response.send(Activities)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher une activitieségorie par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?.IdActivity){
        return response.status(400).send('erreur')
       }
    //rechercher la activitieségorie correspondant à l'id
       const activities = await Activities.findOne({IdActivity:request.params.IdActivity})
       if(!activities){
        response.send('No exist')
       }else{
        response.send(activities)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?.IdActivity){
    return response.status(400).send('erreur')
   }
   // rechercher la activitieségorie correspondante à l'id
   const activities = await Activities.findOne({IdActivity:request.params.IdActivity}).exec()
   if(!activities){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de la activitieségorie trouvée plus haut
    activities.IdActivity = request.body.IdActivity,
    activities.type = request.body.type, 
    activities.UniqPrice = request.body.UniqPrice, 
    activities.town = request.body.town, 
    activities.plan = request.body.plan,
    activities.duration = request.body.duration,
    activities.stories = request.body.stories,
    activities.note = request.body.note,
    activities.vehicle = request.body.vehicle
    activities.updatedAt = new Date()
    const resultat = await activities.save()
    response.send(resultat)
   }
}
//supprimer une activitieségorie
exports.delete= async (request, response)=>{
    if(!request?.params?.IdActivity){
        return response.status(400).send('erreur')
    }
    const activities = await Activities.findOne({IdActivity:request.params.IdActivity})
    if(!activities){
        response.send("no exist")
    }else{
        activities.delete()
        response.send('suppression réussie')
    }
} 