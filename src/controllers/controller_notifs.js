const { response } = require("express")
var Notifs = require("../models/notifs_schema")

  //enrégistrer une ville dans bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvelles notifsegories
     const notifs = new Notifs({
        IdNotifs:request.body.IdNotifs,
        content:request.body.content, 
        user:request.body.user
    })

    //sauvegarder la notifsegorie dans la db
    notifs
        .save()
        .then(data=>{
            response.send(data)
        })
        .catch(err=>{
            response.status(500).send(err)
        })

}
//afficher la liste des notifss
exports.find = (request, response)=>{
    //rechercher la notifsegorie
        Notifs.find()
        .then(Notifs=>{
            //afficher le resultat de la recherche
            response.send(Notifs)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher une notifs par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?.IdNotifs){
        return response.status(400).send('erreur')
       }
    //rechercher la notifs correspondant à l'id
       const notifs = await Notifs.findOne({IdNotis:request.params.IdNotifs})
       if(!notifs){
        response.send('No exist')
       }else{
        response.send(notifs)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?.IdNotifs){
    return response.status(400).send('erreur')
   }
   // rechercher la notifs correspondante à l'id
   const notifs = await Notifs.findOne({IdNotifs:request.params.IdNotifs}).exec()
   if(!notifs){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de la notifs trouvée plus haut
     notifs.IdNotifs = request.body.IdNotifs
     notifs.content = request.body.content
     notifs.user = request.body.user
    const resultat = await notifs.save()
    response.send(resultat)
   }
}
//supprimer une notifs
exports.delete= async (request, response)=>{
    if(!request?.params?.IdNotifs){
        return response.status(400).send('erreur')
    }
    const notifs = await Notifs.findOne({IdNotifs:request.params.IdNotifs})
    if(!notifs){
        response.send("no exist")
    }else{
        notifs.delete()
        response.send('suppression réussie')
    }
} 