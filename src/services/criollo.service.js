const criolloModel = require('../models/criollo');



class Service {
    Service() {}

    async guardarcriollo(criollo = new criolloModel()) {
        try {
            var criolloGuardado;
            await criolloModel.create(criollo).then( (value) => {
                criolloGuardado =  value;
            });

            return criolloGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async consultarcriollo() {
        try {

            return await criolloModel.find();
        } catch (error) {
            return error;

        }
    }

    async eliminarcriollo(idc) {
        console.log(idc);
        var criolloEliminado;
        try {
            await criolloModel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                criolloEliminado = value;
            });

            return criolloEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarcriollo(criollomod) {

        var criolloModificado;
        try {
            await criolloModel.findOneAndUpdate({
                _id: criollomod._id
            }, criollomod).then( (value) => {

                criolloModificado = criollomod;
            });

            return criolloModificado;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new Service();
