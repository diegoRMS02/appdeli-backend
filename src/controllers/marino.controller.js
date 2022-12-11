const marinoService = require('../services/marino.service');

const agregarmarino = async (req, res) => {
    console.log(req.body);
    res.json({
       marino: await marinoService.guardarmarino(req.body)

    })

}

const consultarmarino = async(req, res) => {
    res.json({
        marino: await marinoService.consultarmarino()
    })
}

const modificarmarino = async(req, res) => {
    res.json({
        marino: await marinoService.modificarmarino(req.body)
    })
}

const eliminarmarino = async(req, res) => {
    res.json({
        marino: await marinoService.eliminarmarino(req.params.id)
    })
}



module.exports = {consultarmarino, agregarmarino, modificarmarino, eliminarmarino};