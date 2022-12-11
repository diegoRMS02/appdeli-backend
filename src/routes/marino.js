const { Router } = require('express');
const { consultarmarino, agregarmarino, modificarmarino, eliminarmarino} = require('../controllers/marino.controller')
const router = Router();


router.get('/api/marino', consultarmarino);
router.post('/api/marino/registro', agregarmarino);
router.put('/api/marino/modificar', modificarmarino);
router.delete('/api/marino/eliminar/:id', eliminarmarino);



module.exports = router;