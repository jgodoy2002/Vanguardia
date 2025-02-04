var router = require('express').Router();
const { //ADD, UPDATE ELIMINAR, BUSCAR, AGREGAR MIEMBROS 
    getAllMiembros,
    createGremio,
    updateGremio,
    deleteGremio,
    searchGremio,
} = require("../controllers/gremio.js");

router.get('/:gremioID',searchGremio)
router.post('/',createGremio)
router.put('/gremioID',updateGremio)
router.delete('/gremioID',deleteGremio)

module.exports=router;