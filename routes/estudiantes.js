var router = require('express').Router();
const EstudiantesController = require("../controllers/estudiantes.js");
router.get("/",EstudiantesController.getAllStudents);
module.exports=router;