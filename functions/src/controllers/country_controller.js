const { response } = require("express")
var Country = require("../models/country_model")


exports.create = (request, response) => {
    if (!request.body) {
        response.status(400).send('Valeurs vide');
        return;
    }
    //new country
    const country = new Country({
        code: request.body.code,
        name: request.body.name,
        phoneCode: request.body.phoneCode,
        featuredImage: request.body.featuredImage,
        excerpt: request.body.excerpt,
        description: request.body.description,
        gallery: request.body.gallery
    })

    //save country in the db
    country
        .save()
        .then(data => {
            response.send(data)
        })
        .catch(err => {
            response.status[500].send[{
                message: err.message || "Erreur!!"
            }]
        })

}

exports.find = (request, response) => {
    Country.find()
        .then(Country => {
            response.send(Country)
        })
        .catch(error => {
            response.status(500).send("il y'a erreur")
        })
}

exports.findOne = async(request, response) => {
    if (!request ?.params ?._id) {
        return response.status(400).send('erreur')
    }

    const country = await Country.findOne({ code: request.params._id })
    console.log(country)
    if (!country) {
        response.send('No exist')
    } else {
        response.send(country);
    }
}

//rechercher un groupe de documents grâce à des indexes

exports.search= async (request, response)=>{
    const req = request.body.index
    console.log(req)
    Country
    .find(
        { $text : { $search : req } }, 
        { score : { $meta: "textScore" } }
    )
    .sort({ score : { $meta : 'textScore' } })
    .exec(function(err, results) {
        response.send(results);
    });
}


exports.update = async(request, response) => {
    if (!request ?.params ?.code) {
        return response.status(400).send('erreur')
    }

    const country = await Country.findOne({ code: request.params.code }).exec()
    if (!country) {
        response.send('No exist')
    } else {
        country.code = request.body.code
        country.name = request.body.name
        country.phoneCode = request.body.phoneCode
        country.featuredImage = request.body.featuredImage
        country.excerpt = request.body.excerpt
        country.description = request.body.description
        country.gallery = request.body.gallery
        country.updatedAt = new Date()
        const resultat = await country.save()
        response.send(resultat)
    }
}
exports.delete = async(request, response) => {
    if (!request ?.params ?.code) {
        return response.status(400).send('erreur')
    }
    const country = await Country.findOne({ code: request.params.code }).exec()
    if (!country) {
        response.send("no exist")
    } else {
        country.delete()
        response.send('suppression réussie')
    }
}