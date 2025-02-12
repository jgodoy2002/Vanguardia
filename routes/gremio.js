var router = require('express').Router();
const { //ADD, UPDATE ELIMINAR, BUSCAR, AGREGAR MIEMBROS 
    getAllMiembros,
    createGremio,
    updateGremio,
    deleteGremio,
    searchGremio,
    getGremios,
} = require("../controllers/gremio.js");

router.get('/gremioID',searchGremio)
router.get('/gremios',getGremios)
router.post('/',createGremio)
router.put('/gremioID',updateGremio)
router.delete('/gremioID',deleteGremio)

module.exports=router;