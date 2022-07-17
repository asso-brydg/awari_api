const { response } = require("express")
var Experience = require("../models/experience_model")

  //enrégistrer  une expérience dans la bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvelle expérience
     const experience = new Experience({
     _id: new mongoose.Types.ObjectId,
    name : request.body.name, 
    departureDate : request.body.departureDate, 
    excerpt : request.body.excerpt, 
    description : request.body.description, 
    duration : request.body.duration, 
    notes : request.body.notes, 
    numberVotes : request.body.numberVotes, 
    featuredImage : request.body.featuredImage, 
    gallery : request.body.gallery, 
    tags : request.body.tags, 
    price : request.body.price, 
    type : request.body.type,
    meetingAdress : request.body.meetingAdress,
    city_id : request.body.city_id,
    stories : request.body.stories,
    activity_id : request.body.activity_id,
    vehicleIsAvailable : request.body.vehicleIsAvailable,
    })

    //sauvegarder l'expérience dans la db
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
//chercher  une expérience par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?._id){
        return response.status(400).send('erreur')
       }
    //rechercher l'expérience correspondant à l'id
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
   // rechercher l'expérience correspondante à l'id
   const experience = await Experience.findOne({ _id:request.params._id}).exc()
   if(!experience){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de l'expérience trouvée plus haut
    experience.name = request.body.name, 
    experience.departureDate = request.body.departureDate, 
    experience.excerpt = request.body.excerpt, 
    experience.description = request.body.description, 
    experience.duration = request.body.duration, 
    experience.notes = request.body.notes, 
    experience.numberVotes = request.body.numberVotes, 
    experience.featuredImage = request.body.featuredImage, 
    experience.gallery = request.body.gallery, 
    experience.tags = request.body.tags, 
    experience.price = request.body.price, 
    experience.type = request.body.type,
    experience.meetingAdress = request.body.meetingAdress,
    experience.city_id=request.body.city_id,
    experience.stories = request.body.stories,
    experience.activity_id = request.body.activity_id,
    experience.vehicleIsAvailable = request.body.vehicleIsAvailable,
    experience.updatedAt = new Date()
    const resultat = await experience.save()
    response.send(resultat)
   }
}
//supprimer  une expérience
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