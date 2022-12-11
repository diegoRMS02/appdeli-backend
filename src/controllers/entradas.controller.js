const entradasService = require('../services/entradas.service');

const agregarentradas = async (req, res) => {
    console.log(req.body);
    res.json({
       entradas: await entradasService.guardarentradas(req.body)

    })

}

const consultarentradas = async(req, res) => {
    res.json({
        entradas: await entradasService.consultarentradas()
    })
}

const modificarentradas = async(req, res) => {
    res.json({
        entradas: await entradasService.modificarentradas(req.body)
    })
}

const eliminarentradas = async(req, res) => {
    res.json({
        entradas: await entradasService.eliminarentradas(req.params.id)
    })
}



module.exports = {consultarentradas, agregarentradas, modificarentradas, eliminarentradas};