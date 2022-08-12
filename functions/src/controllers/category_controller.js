const { response } = require("express")
const mongoose = require("mongoose")
var Category = require("../models/category_model")

  //enrégistrer une catégorie dans bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvelles categories
     const category = new Category({
        _id: new mongoose.Types.ObjectId,
        name:request.body.name, 
        featuredImage:request.body.featuredImage, 
        description:request.body.description, 
        excerpt:request.body.excerpt, 
        gallery:request.body.gallery,
        tags:request.body.tags
    })

    //sauvegarder la catégorie dans la db
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
    //rechercher la catégorie
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
       if(!category){
        response.send('No exist')
       }else{
        response.send(category)
       }
}
  
//rechercher un groupe de documents grâce à des indexes

exports.search= async (request, response)=>{
    const req = request.body.index
    console.log(req)
    Category
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
   // rechercher la catégorie correspondante à l'id
   const category = awaitCategory.findOne({_id:request.params._id}).exec()
   if(!category){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de la catégorie trouvée plus haut
    category.name = request.body.name,
    category.featuredImage = request.body.featuredImage,
    category.description = request.body.description,
    category.excerpt = request.body.excerpt,
    category.gallery = request.body.gallery,
    category.tags = request.body.tags,
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
    const category = await Category.findOne ({ _id:request.params._id})
    if(!category){
        response.send("no exist")
    }else{
       category.delete()
        response.send('suppression réussie')
    }
} 