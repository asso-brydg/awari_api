const { response } = require("express")
var  City = require("../models/city_model")
const mongoose = require("mongoose")
var Country = require("../models/country_model")

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


    country_search = Country.findOne({code:City.country_id})
    console.log(country_id)
    //sauvergarder une ville dans la bd
   if(country_search){
        city
        .save()
        .then(data=>{
            response.send(data)
        })
        .catch(err=>{
            response.status(500).send(err)
        })
   }else{
    response.send("Le pays n'existe pas")
   }

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

//rechercher un groupe de documents grâce à des indexes

exports.search= async (request, response)=>{
    const req = request.body.index
    console.log(req)
    City
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