const { Router } = require('express');
const { consultarpostres, agregarpostres, modificarpostres, eliminarpostres} = require('../controllers/postres.controller')
const router = Router();


router.get('/api/postres', consultarpostres);
router.post('/api/postres/registro', agregarpostres);
router.put('/api/postres/modificar', modificarpostres);
router.delete('/api/postres/eliminar/:id', eliminarpostres);



module.exports = router;