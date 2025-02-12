
var router = require('express').Router();
const { //ADD, UPDATE ELIMINAR, BUSCAR, AGREGAR MIEMBROS 
    searchHechizeros,
    createHechizero,
    updateHechizero,
    deleteHechizero,
    searchHechizero,
} = require("../controllers/hechizeros.jsx");

router.get('/hechizeros',searchHechizeros)
router.get('/hechizeroID',searchHechizero)
router.post('/',createHechizero)
router.put('/hechizeroID',updateHechizero)
router.delete('/hechizeroID',deleteHechizero)

module.exports=router;