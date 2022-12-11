const tragosModel = require('../models/tragos');



class Service {
    Service() {}

    async guardartragos(tragos = new tragosModel()) {
        try {
            var tragosGuardado;
            await tragosModel.create(tragos).then( (value) => {
                tragosGuardado =  value;
            });

            return tragosGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async consultartragos() {
        try {

            return await tragosModel.find();
        } catch (error) {
            return error;

        }
    }

    async eliminartragos(idc) {
        console.log(idc);
        var tragosEliminado;
        try {
            await tragosModel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                tragosEliminado = value;
            });

            return tragosEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificartragos(tragosmod) {

        var tragosModificado;
        try {
            await tragosModel.findOneAndUpdate({
                _id: tragosmod._id
            }, tragosmod).then( (value) => {

                tragosModificado = tragosmod;
            });

            return tragosModificado;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new Service();
