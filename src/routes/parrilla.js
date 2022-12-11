const { Router } = require('express');
const { consultarparrilla, agregarparrilla, modificarparrilla, eliminarparrilla} = require('../controllers/parrilla.controller')
const router = Router();


router.get('/api/parrilla', consultarparrilla);
router.post('/api/parrilla/registro', agregarparrilla);
router.put('/api/parrilla/modificar', modificarparrilla);
router.delete('/api/parrilla/eliminar/:id', eliminarparrilla);



module.exports = router;