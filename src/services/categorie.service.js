const categorieModel = require('../models/categorie');



class Service {
    Service() {}

    async guardarcategorie(categorie = new categorieModel()) {
        try {
            var categorieGuardado;
            await categorieModel.create(categorie).then( (value) => {
                categorieGuardado =  value;
            });

            return categorieGuardado;

        } catch (error) {
            console.log(error);

        }
    }

    async consultarcategorie() {
        try {

            return await categorieModel.find();
        } catch (error) {
            return error;

        }
    }

    async eliminarcategorie(idc) {
        console.log(idc);
        var categorieEliminado;
        try {
            await categorieModel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                categorieEliminado = value;
            });

            return categorieEliminado;
        } catch (error) {
            console.log(error);

        }
    }

    async modificarcategorie(categoriemod) {

        var categorieModificado;
        try {
            await categorieModel.findOneAndUpdate({
                _id: categoriemod._id
            }, categoriemod).then( (value) => {

                categorieModificado = categoriemod;
            });

            return categorieModificado;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new Service();
