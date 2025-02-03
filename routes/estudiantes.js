var router = require('express').Router();
const EstudiantesController = require("../controllers/estudiantes");
router.get("/",EstudiantesController.getAllStudents);
module.exports=router;