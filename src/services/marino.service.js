const marinoModel = require('../models/marino');



class Service {
    Service() {}

    async guardarmarino(marino = new marinoModel()) {
        try {
            var marinoGuardado;
            await marinoModel.create(marino).then( (value) => {
                marinoGuardado =  value;
            });

            return marinoGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async consultarmarino() {
        try {

            return await marinoModel.find();
        } catch (error) {
            return error;

        }
    }

    async eliminarmarino(idc) {
        console.log(idc);
        var marinoEliminado;
        try {
            await marinoModel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                marinoEliminado = value;
            });

            return marinoEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarmarino(marinomod) {

        var marinoModificado;
        try {
            await marinoModel.findOneAndUpdate({
                _id: marinomod._id
            }, marinomod).then( (value) => {

                marinoModificado = marinomod;
            });

            return marinoModificado;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new Service();
