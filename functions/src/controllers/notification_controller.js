const { response } = require("express")
var Notification = require("../models/notification_model")
const mongoose = require("mongoose")

  //enrégistrer une notification dans bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvelles notifications
     const notification = new Notification({
        _id: new mongoose.Types.ObjectId,
        title:request.body.title, 
        content:request.body.content, 
        receiver_id:request.body.receiver_id,
        sender_id:request.body.sender_id
    })

    //sauvegarder la notification dans la db
    notification
        .save()
        .then(data=>{
            response.send(data)
        })
        .catch(err=>{
            response.status(500).send(err)
        })

}
//afficher la liste des notification
exports.find = (request, response)=>{
    //rechercher la notification
        Notification.find()
        .then(Notification=>{
            //afficher le resultat de la recherche
            response.send(Notification)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher une notification par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?._id){
        return response.status(400).send('erreur')
       }
    //rechercher la notification correspondant à l'id
       const notification = await Notification.findOne({IdNotis:request.params._id})
       if(!notification){
        response.send('No exist')
       }else{
        response.send(notification)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?._id){
    return response.status(400).send('erreur')
   }
   // rechercher la notification correspondante à l'id
   const notification = await Notification.findOne({_id:request.params._id}).exec()
   if(!notification){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de la notification trouvée plus haut
     notification.title = request.body.title
     notification.content = request.body.content
     notification.receiver_id = request.body.receiver_id
     notification.sender_id = request.body.sender_id
     notification.updatedAt = new Dat()
    const resultat = await notification.save()
    response.send(resultat)
   }
}
//supprimer une notification
exports.delete= async (request, response)=>{
    if(!request?.params?._id){
        return response.status(400).send('erreur')
    }
    const notification = await Notification.findOne({_id:request.params._id})
    if(!notification){
        response.send("no exist")
    }else{
        notification.delete()
        response.send('suppression réussie')
    }
} 