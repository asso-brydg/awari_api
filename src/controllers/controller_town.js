const { response } = require("express")
var Town = require("../models/town_schema")

 //enrégistrer une ville dans bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nnouvelles villes
     const town = new Town({
        IdTown:request.body.IdTown,
        name:request.body.name, 
        image:request.body.image, 
        description:request.body.description, 
        gallerie:request.body.gallerie,
        country:request.body.country
    })

    //sauvergarder une ville dans la bd
    town
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
        Town.find()
        .then(Town=>{
    //afficher le resultat de la recherche
            response.send(Town)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher une ville par son identifiant
exports.findOne= async (request, response)=>{
        //vérifier si l'identifiant a été précisé
    if(!request?.params?.IdTown){
        return response.status(400).send('erreur')
       }
        //rechercher la ville correspondant à l'id
       const town = await Town.findOne({IdTown:request.params.IdTown})
       if(!town){
        response.send('No exist')
       }else{
        response.send(town)
       }
}
//mise à jour
exports.update= async (request, response)=>{
        //vérifier si l'identifiant a été précisé
   if(!request?.params?.IdTown){
    return response.status(400).send('erreur')
   }
   // rechercher la ville correspondante à l'id
   const town = await Town.findOne({IdTown:request.params.IdTown}).exec()
   if(!Town){
    response.send('No exist')
   }else{
        //récupérer les données de la requête et modifier les données de la ville trouvée plus haut
     town.IdTown = request.body.IdTown
     town.name = request.body.name
     town.image = request.body.image
     town.description = request.body.description
     town.gallerie = request.body.gallerie
     town.country = request.body.country
     town.updatedAt = new Date()
    const resultat = await town.save()
    response.send(resultat)
   }
}
//supprimer une ville
exports.delete= async (request, response)=>{
    if(!request?.params?.IdTown){
        return response.status(400).send('erreur')
    }
    const town = await Town.findOne({IdTown:request.params.IdTown})
    if(!town){
        response.send("no exist")
    }else{
        town.delete()
        response.send('suppression réussie')
    }
} 