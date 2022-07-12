const { response } = require("express")
var Town = require("../models/town_schema")

 
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //new town
     const town = new Town({
        IdTown:request.body.IdTown,
        name:request.body.name, 
        image:request.body.image, 
        description:request.body.description, 
        gallerie:request.body.gallerie,
        country:request.body.country
    })

    //save town in the db
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
        Town.find()
        .then(Town=>{
            response.send(Town)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}

exports.findOne= async (request, response)=>{
    if(!request?.params?.IdTown){
        return response.status(400).send('erreur')
       }
    
       const town = await Town.findOne({IdTown:request.params.IdTown})
       if(!town){
        response.send('No exist')
       }else{
        response.send(town)
       }
}

exports.update= async (request, response)=>{
   if(!request?.params?.IdTown){
    return response.status(400).send('erreur')
   }

   const town = await Town.findOne({IdTown:request.params.IdTown}).exec()
   if(!Town){
    response.send('No exist')
   }else{
     town.IdTown = request.body.IdTown
     town.name = request.body.name
     town.image = request.body.image
     town.description = request.body.description
     town.gallerie = request.body.gallerie
     town.country = request.body.country
    const resultat = await town.save()
    response.send(resultat)
   }
}
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