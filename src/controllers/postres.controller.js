const postresService = require('../services/postres.service');

const agregarpostres = async (req, res) => {
    console.log(req.body);
    res.json({
       postres: await postresService.guardarpostres(req.body)

    })

}

const consultarpostres = async(req, res) => {
    res.json({
        postres: await postresService.consultarpostres()
    })
}

const modificarpostres = async(req, res) => {
    res.json({
        postres: await postresService.modificarpostres(req.body)
    })
}

const eliminarpostres = async(req, res) => {
    res.json({
        postres: await postresService.eliminarpostres(req.params.id)
    })
}



module.exports = {consultarpostres, agregarpostres, modificarpostres, eliminarpostres};