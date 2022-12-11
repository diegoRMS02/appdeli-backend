const entradasModel = require('../models/entradas');



class Service {
    Service() {}

    async guardarentradas(entradas = new entradasModel()) {
        try {
            var entradasGuardado;
            await entradasModel.create(entradas).then( (value) => {
                entradasGuardado =  value;
            });

            return entradasGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async consultarentradas() {
        try {

            return await entradasModel.find();
        } catch (error) {
            return error;

        }
    }

    async eliminarentradas(idc) {
        console.log(idc);
        var entradasEliminado;
        try {
            await entradasModel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                entradasEliminado = value;
            });

            return entradasEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarentradas(entradasmod) {

        var entradasModificado;
        try {
            await entradasModel.findOneAndUpdate({
                _id: entradasmod._id
            }, entradasmod).then( (value) => {

                entradasModificado = entradasmod;
            });

            return entradasModificado;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new Service();
