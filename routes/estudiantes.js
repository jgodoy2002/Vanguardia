var router = require('express').Router();
const EstudiantesController = require("../controllers/estudiantes.jsx");
router.get("/",EstudiantesController.getAllStudents);
module.exports=router;