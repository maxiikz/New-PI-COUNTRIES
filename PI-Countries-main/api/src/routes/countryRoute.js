const {GetCountryId, savesCountry} = require('../controllers/controller.countries')


const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', savesCountry)
router.get('/countries/:id', GetCountryId)


module.exports = router;