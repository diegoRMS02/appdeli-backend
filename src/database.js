const mongose = require('mongoose');
const dbConection = async() => {
    try {
        console.log('Conectando DB..............................................');
        await mongose.connect('mongodb+srv://appAdmin:admin123456@expressgame.cpa9i.mongodb.net/AppDelvery?retryWrites=true&w=majority', {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('CONECTADO...................................................');

    } catch (error) {

        throw new Error(error);

    }
}

module.exports = {
    dbConection
};