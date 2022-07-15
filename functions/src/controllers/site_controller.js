const { response } = require("express")
var Site = require("../models/site_model")

  //enrégistrer un utilisateur dans la bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvel utilisateur
     const site = new Site({
        _id:request.body._id,
        name:request.body.name, 
        featuredImage:request.body.featuredImage, 
        description:request.body.description, 
        gallery:request.body.gallery, 
        videos:request.body.videos,
        city_id:request.body. city_id,
        activity_id:request.body.activity_id
    })

    //sauvegarder l'utilisateur dans la db
    site
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
        Site.find()
        .then(Site=>{
            //afficher le resultat de la recherche
            response.send(Site)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher un utilisateur par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?._id){
        return response.status(400).send('erreur')
       }
    //rechercher l'utilisateur correspondant à l'id
       const site = await Site.findOne({_id:request.params._id})
       if(!site){
        response.send('No exist')
       }else{
        response.send(site)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?._id){
    return response.status(400).send('erreur')
   }
   // rechercher l'utilisateur correspondante à l'id
   const site = await Site.findOne({ _id:request.params. _id}).exec()
   if(!site){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de l'utilisateur trouvée plus haut
    site._id = request.body._id,
    site.name = request.body.name, 
    site.featuredImage = request.body.featuredImage, 
    site.description = request.body.description, 
    site.gallery = request.body.gallery, 
    site.videos = request.body.videos,
    site. city_id = request.body. city_id,
    site.activity_id = request.body.activity_id,
    site.updatedAt = new Date()
    const resultat = await site.save()
    response.send(resultat)
   }
}
//supprimer un utilisateur
exports.delete= async (request, response)=>{
    if(!request?.params?._id){
        return response.status(400).send('erreur')
    }
    const site = await Site.findOne({_id:request.params._id})
    if(!site){
        response.send("no exist")
    }else{
        site.delete()
        response.send('suppression réussie')
    }
} 