const { response } = require("express")
var User = require("../models/user_model")

  //enrégistrer un utilisateur dans la bd
exports.create = (request, response)=>{
    if(!request.body){
        response.status(400).send('Valeurs vide')
        return
    }
     //nouvel utilisateur
     const user = new User({
        _id:request.body. _id,
        firstName:request.body.firstName, 
        name:request.body.name, 
        email:request.body.email, 
        password:request.body.password, 
        adress:request.body.adress,
        country:request.body.country,
        image:request.body.image,
        type:request.body.type
    })

    //sauvegarder l'utilisateur dans la db
    user
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
        User.find()
        .then(User=>{
            //afficher le resultat de la recherche
            response.send(User)
        })
        .catch(error=>{
            response.status(500).send("il y'a erreur")
        })
}
//chercher un utilisateur par son identifiant
exports.findOne= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
    if(!request?.params?. _id){
        return response.status(400).send('erreur')
       }
    //rechercher l'utilisateur correspondant à l'id
       const user = await User.findOne({ _id:request.params. _id})
       if(!user){
        response.send('No exist')
       }else{
        response.send(user)
       }
}
//mise à jour
exports.update= async (request, response)=>{
    //vérifier si l'identifiant a été précisé
   if(!request?.params?. _id){
    return response.status(400).send('erreur')
   }
   // rechercher l'utilisateur correspondante à l'id
   const user = await User.findOne({ _id:request.params. _id}).exec()
   if(!user){
    response.send('No exist')
   }else{
    //récupérer les données de la requête et modifier les données de l'utilisateur trouvée plus haut
    user. _id = request.body. _id,
    user.firstName = request.body.firstName, 
    user.name = request.body.name, 
    user.email = request.body.email, 
    user.password = request.body.password, 
    user.adress = request.body.adress,
    user.country = request.body.country,
    user.image = request.body.image,
    user.type = request.body.type
    user.updatedAt = new Date()
    const resultat = await user.save()
    response.send(resultat)
   }
}
//supprimer un utilisateur
exports.delete= async (request, response)=>{
    if(!request?.params?. _id){
        return response.status(400).send('erreur')
    }
    const user = await User.findOne({ _id:request.params. _id})
    if(!user){
        response.send("no exist")
    }else{
        user.delete()
        response.send('suppression réussie')
    }
} 