const tragosService = require('../services/tragos.service');

const agregartragos = async (req, res) => {
    console.log(req.body);
    res.json({
       tragos: await tragosService.guardartragos(req.body)

    })

}

const consultartragos = async(req, res) => {
    res.json({
        tragos: await tragosService.consultartragos()
    })
}

const modificartragos = async(req, res) => {
    res.json({
        tragos: await tragosService.modificartragos(req.body)
    })
}

const eliminartragos = async(req, res) => {
    res.json({
        tragos: await tragosService.eliminartragos(req.params.id)
    })
}



module.exports = {consultartragos, agregartragos, modificartragos, eliminartragos};