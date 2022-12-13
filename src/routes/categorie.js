const { Router } = require('express');
const { consultarcategorie, agregarcategorie, modificarcategorie, eliminarcategorie} = require('../controllers/categorie.controller')
const router = Router();


router.get('/api/categorie', consultarcategorie);
router.post('/api/categorie/registro', agregarcategorie);
router.put('/api/categorie/modificar', modificarcategorie);
router.delete('/api/categorie/eliminar/:id', eliminarcategorie);



module.exports = router;