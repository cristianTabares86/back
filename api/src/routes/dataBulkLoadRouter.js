const { Router } = require('express');
const { getPostVideogamesIntoDBHandlers } = require('../handlers/dataBulkLoadHandlers')


const typesRouter = Router();

typesRouter.get("/", getPostVideogamesIntoDBHandlers); 


module.exports = typesRouter;