const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dataBulkLoad = require('./dataBulkLoadRouter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dataBulkLoad', dataBulkLoad);


module.exports = router;
