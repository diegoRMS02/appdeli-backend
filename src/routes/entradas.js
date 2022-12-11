const { Router } = require('express');
const { consultarentradas, agregarentradas, modificarentradas, eliminarentradas} = require('../controllers/entradas.controller')
const router = Router();


router.get('/api/entradas', consultarentradas);
router.post('/api/entradas/registro', agregarentradas);
router.put('/api/entradas/modificar', modificarentradas);
router.delete('/api/entradas/eliminar/:id', eliminarentradas);



module.exports = router;