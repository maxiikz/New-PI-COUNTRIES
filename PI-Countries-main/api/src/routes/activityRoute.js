const { postAct,
    findAct} = require('../controllers/controller.activity')


const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/activity', postAct)
router.get('/activity', findAct)



module.exports = router;