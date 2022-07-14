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
        IdExp:request.body.IdExp,
        name:request.body.name, 
        image:request.body.image, 
        description:request.body.description, 
        gallerie:request.body.gallerie, 
        videos:request.body.videos,
         city:request.body. city,
        activity:request.body.activity
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
    if(!request?.params?.IdExp){
        return response.status(400).send('erreur')
       }
    //rechercher l'utilisateur correspondant à l'id
       const site = await Site.findOne({IdExp:request.params.IdExp})
       if(!site){
        response.send('No exist')
       }else{
        response.send(site)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?.IdExp){
    return response.status(400).send('erreur')
   }
   // rechercher l'utilisateur correspondante à l'id
   const site = await Site.findOne({ _id:request.params. _id}).exec()
   if(!site){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de l'utilisateur trouvée plus haut
    site.IdExp = request.body.IdExp,
    site.name = request.body.name, 
    site.image = request.body.image, 
    site.description = request.body.description, 
    site.gallerie = request.body.gallerie, 
    site.videos = request.body.videos,
    site. city = request.body. city,
    site.activity = request.body.activity,
    site.updatedAt = new Date()
    const resultat = await site.save()
    response.send(resultat)
   }
}
//supprimer un utilisateur
exports.delete= async (request, response)=>{
    if(!request?.params?.IdExp){
        return response.status(400).send('erreur')
    }
    const site = await Site.findOne({IdExp:request.params.IdExp})
    if(!site){
        response.send("no exist")
    }else{
        site.delete()
        response.send('suppression réussie')
    }
} 