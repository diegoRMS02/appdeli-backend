const express =  require('express');
const bodyParser = require('body-parser');
const app = express();

const morgan = require('morgan');
const cors = require('cors');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(morgan('dev'));
app.use(cors());
app.use(require('./routes/marino'));
app.use(require('./routes/criollo'));
app.use(require('./routes/parrilla'));
app.use(require('./routes/entradas'));
app.use(require('./routes/tragos'));
app.use(require('./routes/postres'));
app.use(require('./routes/categorie'));




module.exports = app;