const { response } = require("express")
var Res = require("../models/reservation_schema")

  //enrégistrer un utilisateur dans la bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvel utilisateur
     const res = new Res({
        IdRes:request.body.IdRes,
        meetingPlace:request.body.meetingPlace, 
        amount:request.body.amount, 
        numberPersonne:request.body.numberPersonne, 
        status:request.body.status, 
        payementDay:request.body.payementDay,
        startDate:request.body.startDate,
        activities:request.body.activities
    })

    //sauvegarder l'utilisateur dans la db
    res
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
        Res.find()
        .then(Res=>{
            //afficher le resultat de la recherche
            response.send(Res)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher un utilisateur par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?.IdRes){
        return response.status(400).send('erreur')
       }
    //rechercher l'utilisateur correspondant à l'id
       const res = await Res.findOne({IdRes:request.params.IdRes})
       if(!res){
        response.send('No exist')
       }else{
        response.send(res)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?.IdRes){
    return response.status(400).send('erreur')
   }
   // rechercher l'utilisateur correspondante à l'id
   const res = await Res.findOne({IdCat:request.params.IdCat}).exec()
   if(!res){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de l'utilisateur trouvée plus haut
    res.IdRes = request.body.IdRes,
    res.meetingPlace = request.body.meetingPlace, 
    res.amount = request.body.amount, 
    res.numberPersonne = request.body.numberPersonne, 
    res.status = request.body.status, 
    res.payementDay = request.body.payementDay,
    res.startDate = request.body.startDate,
    res.activities = request.body.activities,
    res.updatedAt = new Date()
    const resultat = await res.save()
    response.send(resultat)
   }
}
//supprimer un utilisateur
exports.delete= async (request, response)=>{
    if(!request?.params?.IdRes){
        return response.status(400).send('erreur')
    }
    const res = await Res.findOne({IdRes:request.params.IdRes})
    if(!res){
        response.send("no exist")
    }else{
        res.delete()
        response.send('suppression réussie')
    }
} 