const postresModel = require('../models/postres');



class Service {
    Service() {}

    async guardarpostres(postres = new postresModel()) {
        try {
            var postresGuardado;
            await postresModel.create(postres).then( (value) => {
                postresGuardado =  value;
            });

            return postresGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async consultarpostres() {
        try {

            return await postresModel.find();
        } catch (error) {
            return error;

        }
    }

    async eliminarpostres(idc) {
        console.log(idc);
        var postresEliminado;
        try {
            await postresModel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                postresEliminado = value;
            });

            return postresEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarpostres(postresmod) {

        var postresModificado;
        try {
            await postresModel.findOneAndUpdate({
                _id: postresmod._id
            }, postresmod).then( (value) => {

                postresModificado = postresmod;
            });

            return postresModificado;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new Service();
