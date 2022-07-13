const { response } = require("express")
var Cat = require("../models/categorie_schema")

 
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //new town
     const cat = new Cat({
        IdCat:request.body.IdCat,
        name:request.body.name, 
        image:request.body.image, 
        description:request.body.description, 
        gallerie:request.body.gallerie,
        tags:request.body.tags
    })

    //save town in the db
    cat
        .save()
        .then(data=>{
            response.send(data)
        })
        .catch(err=>{
            response.status(500).send(err)
        })

}

exports.find = (request, response)=>{
        Cat.find()
        .then(Cat=>{
            response.send(Cat)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}

exports.findOne= async (request, response)=>{
    if(!request?.params?.IdCat){
        return response.status(400).send('erreur')
       }
    
       const cat = await Cat.findOne({IdCat:request.params.IdCat})
       if(!cat){
        response.send('No exist')
       }else{
        response.send(cat)
       }
}

exports.update= async (request, response)=>{
   if(!request?.params?.IdCat){
    return response.status(400).send('erreur')
   }

   const cat = await Cat.findOne({IdCat:request.params.IdCat}).exec()
   if(!Cat){
    response.send('No exist')
   }else{
     cat.IdCat = request.body.IdCat
     cat.name = request.body.name
     cat.image = request.body.image
     cat.description = request.body.description
     cat.gallerie = request.body.gallerie
     cat.tags = request.body.tags
     cat.updatedAt = new Date()
    const resultat = await cat.save()
    response.send(resultat)
   }
}
exports.delete= async (request, response)=>{
    if(!request?.params?.IdCat){
        return response.status(400).send('erreur')
    }
    const cat = await Cat.findOne({IdCat:request.params.IdCat})
    if(!cat){
        response.send("no exist")
    }else{
        cat.delete()
        response.send('suppression réussie')
    }
} 