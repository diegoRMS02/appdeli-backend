const categorieService = require('../services/categorie.service');

const agregarcategorie = async (req, res) => {
    console.log(req.body);
    res.json({
       categorie: await categorieService.guardarcategorie(req.body)

    })

}

const consultarcategorie = async(req, res) => {
    res.json({
        categorie: await categorieService.consultarcategorie()
    })
}

const modificarcategorie = async(req, res) => {
    res.json({
        categorie: await categorieService.modificarcategorie(req.body)
    })
}

const eliminarcategorie = async(req, res) => {
    res.json({
        categorie: await categorieService.eliminarcategorie(req.params.id)
    })
}



module.exports = {consultarcategorie, agregarcategorie, modificarcategorie, eliminarcategorie};