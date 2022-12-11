const criolloService = require('../services/criollo.service');

const agregarcriollo = async (req, res) => {
    console.log(req.body);
    res.json({
       criollo: await criolloService.guardarcriollo(req.body)

    })

}

const consultarcriollo = async(req, res) => {
    res.json({
        criollo: await criolloService.consultarcriollo()
    })
}

const modificarcriollo = async(req, res) => {
    res.json({
        criollo: await criolloService.modificarcriollo(req.body)
    })
}

const eliminarcriollo = async(req, res) => {
    res.json({
        criollo: await criolloService.eliminarcriollo(req.params.id)
    })
}



module.exports = {consultarcriollo, agregarcriollo, modificarcriollo, eliminarcriollo};