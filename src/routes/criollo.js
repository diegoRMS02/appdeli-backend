const { Router } = require('express');
const { consultarcriollo, agregarcriollo, modificarcriollo, eliminarcriollo} = require('../controllers/criollo.controller')
const router = Router();


router.get('/api/criollo', consultarcriollo);
router.post('/api/criollo/registro', agregarcriollo);
router.put('/api/criollo/modificar', modificarcriollo);
router.delete('/api/criollo/eliminar/:id', eliminarcriollo);



module.exports = router;