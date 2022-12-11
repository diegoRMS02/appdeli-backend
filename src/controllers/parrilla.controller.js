const parrillaService = require('../services/parrilla.service');

const agregarparrilla = async (req, res) => {
    console.log(req.body);
    res.json({
       parrilla: await parrillaService.guardarparrilla(req.body)

    })

}

const consultarparrilla = async(req, res) => {
    res.json({
        parrilla: await parrillaService.consultarparrilla()
    })
}

const modificarparrilla = async(req, res) => {
    res.json({
        parrilla: await parrillaService.modificarparrilla(req.body)
    })
}

const eliminarparrilla = async(req, res) => {
    res.json({
        parrilla: await parrillaService.eliminarparrilla(req.params.id)
    })
}



module.exports = {consultarparrilla, agregarparrilla, modificarparrilla, eliminarparrilla};