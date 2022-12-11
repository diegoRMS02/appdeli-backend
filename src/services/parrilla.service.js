const parrillaModel = require('../models/parrilla');



class Service {
    Service() {}

    async guardarparrilla(parrilla = new parrillaModel()) {
        try {
            var parrillaGuardado;
            await parrillaModel.create(parrilla).then( (value) => {
                parrillaGuardado =  value;
            });

            return parrillaGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async consultarparrilla() {
        try {

            return await parrillaModel.find();
        } catch (error) {
            return error;

        }
    }

    async eliminarparrilla(idc) {
        console.log(idc);
        var parrillaEliminado;
        try {
            await parrillaModel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                parrillaEliminado = value;
            });

            return parrillaEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarparrilla(parrillamod) {

        var parrillaModificado;
        try {
            await parrillaModel.findOneAndUpdate({
                _id: parrillamod._id
            }, parrillamod).then( (value) => {

                parrillaModificado = parrillamod;
            });

            return parrillaModificado;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new Service();
