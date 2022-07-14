const { response } = require("express")
var Exp = require("../models/exp_schema")

  //enrégistrer un utilisateur dans la bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvel utilisateur
     const exp = new Exp({
        IdExp:request.body.IdExp,
        departureDate:request.body.departureDate, 
        duration:request.body.duration, 
        notes:request.body.notes, 
        UniqPrice:request.body.UniqPrice, 
        info:request.body.info,
        type:request.body.type,
        tripPlan:request.body.tripPlan,
        town:request.body.town,
        stories:request.body.stories,
        activities:request.body.activities,
        vehicle:request.body.vehicle
    })

    //sauvegarder l'utilisateur dans la db
    exp
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
        Exp.find()
        .then(Exp=>{
            //afficher le resultat de la recherche
            response.send(Exp)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher un utilisateur par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?.IdExp){
        return response.status(400).send('erreur')
       }
    //rechercher l'utilisateur correspondant à l'id
       const exp = await Exp.findOne({IdExp:request.params.IdExp})
       if(!exp){
        response.send('No exist')
       }else{
        response.send(exp)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?.IdExp){
    return response.status(400).send('erreur')
   }
   // rechercher l'utilisateur correspondante à l'id
   const exp = await Exp.findOne({IdCat:request.params.IdCat}).exec()
   if(!exp){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de l'utilisateur trouvée plus haut
    exp.IdExp = request.body.IdExp,
    exp.departureDate = request.body.departureDate, 
    exp.duration = request.body.duration, 
    exp.notes = request.body.notes, 
    exp.UniqPrice = request.body.UniqPrice, 
    exp.info = request.body.info,
    exp.type = request.body.type,
    exp.town=request.body.town,
    exp.tripPlan = request.body.tripPlan,
    exp.stories = request.body.stories,
    exp.activities = request.body.activities,
    exp.vehicle = request.body.vehicle,
    exp.updatedAt = new Date()
    const resultat = await exp.save()
    response.send(resultat)
   }
}
//supprimer un utilisateur
exports.delete= async (request, response)=>{
    if(!request?.params?.IdExp){
        return response.status(400).send('erreur')
    }
    const exp = await Exp.findOne({IdExp:request.params.IdExp})
    if(!exp){
        response.send("no exist")
    }else{
        exp.delete()
        response.send('suppression réussie')
    }
} 