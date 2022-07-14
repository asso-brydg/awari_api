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
        image: request.body.image,
        description: request.body.description,
        gallerie: request.body.gallerie
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
    if (!request ?.params ?.code) {
        return response.status(400).send('erreur')
    }

    const country = await Country.findOne({ code: request.params.code })
    console.log(country)
    if (!country) {
        response.send('No exist')
    } else {
        response.send(typeof(country));
    }
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
        country.image = request.body.image
        country.description = request.body.description
        country.gallerie = request.body.gallerie
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