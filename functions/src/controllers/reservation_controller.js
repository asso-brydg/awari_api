const { response } = require("express")
var Reservation = require("../models/reservation_model")

  //enrégistrer une reservation dans la bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvel  reservation
     const reservation = new Reservation({
        _id: new mongoose.Types.ObjectId,
        meetingPlace : request.body.meetingPlace, 
        price : request.body.price, 
        numberPersonne : request.body.numberPersonne, 
        type : request.body.type, 
        type_id : request.body.type_id, 
        payementDay : request.body.payementDay,
        payementDone : request.body.payementDone,
        tripCanceled : request.body.tripCanceled,
    })

    //sauvegarder la reservation dans la db
    reservation
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
        Reservation.find()
        .then(Reservation=>{
            //afficher le resultat de la recherche
            response.send(Reservation)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher une reservation par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?._id){
        return response.status(400).send('erreur')
       }
    //rechercher la reservation correspondant à l'id
       const reservation = await Reservation.findOne({_id:request.params._id})
       if(!reservation){
        response.send('No exist')
       }else{
        response.send(reservation)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?._id){
    return response.status(400).send('erreur')
   }
   // rechercher la reservation correspondante à l'id
   const reservation = await Reservation.findOne({ _id:request.params._id})
   if(!reservation){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de la reservation trouvée plus haut
    reservation.meetingPlace = request.body.meetingPlace, 
    reservation.price = request.body.price, 
    reservation.numberPersonne = request.body.numberPersonne, 
    reservation.type = request.body.type, 
    reservation.type_id = request.body.type_id, 
    reservation.payementDay = request.body.payementDay,
    reservation.payementDone = request.body.payementDone,
    reservation.tripCanceled = request.body.tripCanceled,
    reservation.updatedAt = new Date()
    const resultat = await reservation.save()
    response.send(resultat)
   }
}
//supprimer une reservation
exports.delete= async (request, response)=>{
    if(!request?.params?._id){
        return response.status(400).send('erreur')
    }
    const reservation = await Reservation.findOne({_id:request.params._id})
    if(!reservation){
        response.send("no exist")
    }else{
        reservation.delete()
        response.send('suppression réussie')
    }
} 