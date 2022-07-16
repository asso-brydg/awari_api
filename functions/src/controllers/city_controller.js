const { response } = require("express")
var  City = require("../models/city_model")

 //enrégistrer une ville dans bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nnouvelles villes
     const  city = new  City({
        _id: new mongoose.Types.ObjectId,
      name : request.body.name,
      featuredImage : request.body.featuredImage,
      excerpt : request.body.excerpt,
      description : request.body.description,
      gallery : request.body.gallery,
      country_id : request.body.country_id,
    })

    //sauvergarder une ville dans la bd
     city
        .save()
        .then(data=>{
            response.send(data)
        })
        .catch(err=>{
            response.status(500).send(err)
        })

}

exports.find = (request, response)=>{
    //rechercher la categorie
         City.find()
        .then( City=>{
    //afficher le resultat de la recherche
            response.send( City)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher une ville par son identifiant
exports.findOne= async (request, response)=>{
        //vérifier si l'identifiant a été précisé
    if(!request?.params?._id){
        return response.status(400).send('erreur')
       }
        //rechercher la ville correspondant à l'id
       const  city = await  City.findOne({_id:request.params._id})
       if(!city){
        response.send('No exist')
       }else{
        response.send( city)
       }
}
//mise à jour
exports.update= async (request, response)=>{
        //vérifier si l'identifiant a été précisé
   if(!request?.params?._id){
    return response.status(400).send('erreur')
   }
   // rechercher la ville correspondante à l'id
   const  city = await  City.findOne({_id:request.params._id}).exec()
   if(!city){
    response.send('No exist')
   }else{
        //récupérer les données de la requête et modifier les données de la ville trouvée plus haut

    //TODO- Verifier si le pays existe
      city.name = request.body.name
      city.featuredImage = request.body.featuredImage
      city.excerpt = request.body.excerpt
      city.description = request.body.description
      city.gallery = request.body.gallery
      city.country_id = request.body.country_id
      city.updatedAt = new Date()
    const resultat = await  city.save()
    response.send(resultat)
   }
}
//supprimer une ville
exports.delete= async (request, response)=>{
    if(!request?.params?._id){
        return response.status(400).send('erreur')
    }
    const  city = await  City.findOne({_id:request.params._id})
    if(!city){
        response.send("no exist")
    }else{
         city.delete()
        response.send('suppression réussie')
    }
} 