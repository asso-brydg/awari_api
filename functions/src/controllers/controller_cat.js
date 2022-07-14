const { response } = require("express")
var Cat = require("../models/categorie_schema")

  //enrégistrer une ville dans bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvelles categories
     const cat = new Cat({
        IdCat:request.body.IdCat,
        name:request.body.name, 
        image:request.body.image, 
        description:request.body.description, 
        gallerie:request.body.gallerie,
        tags:request.body.tags
    })

    //sauvegarder la categorie dans la db
    cat
        .save()
        .then(data=>{
            response.send(data)
        })
        .catch(err=>{
            response.status(500).send(err)
        })

}
//afficher la liste des catégories
exports.find = (request, response)=>{
    //rechercher la categorie
        Cat.find()
        .then(Cat=>{
            //afficher le resultat de la recherche
            response.send(Cat)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher une catégorie par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?.IdCat){
        return response.status(400).send('erreur')
       }
    //rechercher la catégorie correspondant à l'id
       const cat = await Cat.findOne({IdCat:request.params.IdCat})
       if(!cat){
        response.send('No exist')
       }else{
        response.send(cat)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?.IdCat){
    return response.status(400).send('erreur')
   }
   // rechercher la catégorie correspondante à l'id
   const cat = await Cat.findOne({IdCat:request.params.IdCat}).exec()
   if(!cat){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de la catégorie trouvée plus haut
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
//supprimer une catégorie
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