import Gremio from '../models/gremio.js';
import express from 'express';
var router = express.Router();

const createGremio = async()=>{
  const gremio = new Gremio({
    nombre:'Pipipu',
    cantidadMiembros: 10,
    casa:'Gryffindor',
    status:true
  })
  await gremio.save();  
};
createGremio(); 



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
