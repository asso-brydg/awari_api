const { response } = require("express")
var Category = require("../models/category_model")

  //enrégistrer une ville dans bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvelles categories
     const category = newCategory({
      _id:request.body._id,
        name:request.body.name, 
        image:request.body.image, 
        description:request.body.description, 
        gallerie:request.body.gallerie,
        tags:request.body.tags
    })

    //sauvegarder la categorie dans la db
   category
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
       Category.find()
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
    if(!request?.params?._id){
        return response.status(400).send('erreur')
       }
    //rechercher la catégorie correspondant à l'id
       const category = awaitCategory.findOne({_id:request.params._id})
       if(category){
        response.send('No exist')
       }else{
        response.send(cat)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?._id){
    return response.status(400).send('erreur')
   }
   // rechercher la catégorie correspondante à l'id
   const category = awaitCategory.findOne({_id:request.params._id}).exec()
   if(!category){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de la catégorie trouvée plus haut
    category._id= request.body._id
    category.name = request.body.name
    category.image = request.body.image
    category.description = request.body.description
    category.gallerie = request.body.gallerie
    category.tags = request.body.tags
    category.updatedAt = new Date()
    const resultat = awaitcategory.save()
    response.send(resultat)
   }
}
//supprimer une catégorie
exports.delete= async (request, response)=>{
    if(!request?.params?._id){
        return response.status(400).send('erreur')
    }
    const category = awaitCategory.findOne ({ _id:request.params._id})
    if(!category){
        response.send("no exist")
    }else{
       category.delete()
        response.send('suppression réussie')
    }
} 