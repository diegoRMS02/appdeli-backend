const { Router } = require('express');
const { consultartragos, agregartragos, modificartragos, eliminartragos} = require('../controllers/tragos.controller')
const router = Router();


router.get('/api/tragos', consultartragos);
router.post('/api/tragos/registro', agregartragos);
router.put('/api/tragos/modificar', modificartragos);
router.delete('/api/tragos/eliminar/:id', eliminartragos);



module.exports = router;