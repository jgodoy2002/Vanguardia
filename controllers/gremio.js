const {request,response} =require("express");

const gremio = {
    id:1,
    nombre:'Gremio del Fuego',
    casas: 3,
    cantidad: 50,
    status: true
}

const searchGremio = async(req,res)=>{
    const id = Number(req.params.id);
    const gremio = find(gremio => gremio.id === id);
    if(!gremio){
        return res.status(400).json({message:'Error'})
    }
    res.json(gremio)
}

const createGremio = async(req,res)=>{
    const nuevoGremio = {
        id: gremio.length + 1,
        nombre:req.body.nombre,
        casas: req.body.casas,
        cantidad: req.body.cantidad,
        status: true
    }
    gremio.push(nuevoGremio)
    res.status(201).json(nuevoGremio);
}

const updateGremio = async(req,res)=>{
    const id = Number(req.params.id)
    const index = findIndex(gremio => gremio.id === id)
    const updateGremio={
        id:gremio[id].id,
        nombre:req.body.nombre,
        casas: req.body.casas,
        cantidad: req.body.cantidad,
        status: true
    }
    gremio[index] = updateGremio
    res.status(200).json('update')
}

const deleteGremio = async(res,req)=>{
    const id = Number(req.params.id);
    const index = findIndex(gremio => gremio.id === id)
    gremio.splice(index,1)
    res.status(200).json(gremio)
}

const getAllMiembros = async(res,req)=>{
    const{id}=req.body
}

const getGremios=async(res,req)=>{
    const gremios =[
        {id:1,nombre:'Gremio del Fuego',casas:3,cantidad:50,status:true},
        {id:2,nombre:'Gremio del Agua',casas:2,cantidad:30,status:true},
        {id:3,nombre:'Gremio del Viento',casas:4,cantidad:40,status:true},    
    ]
    try {
        const SQL = gremios.map(gremio=>gremio);
        console.log(SQL);
        res.status(200).json(SQL);
    } catch (error) {
        console.error('Error al obtener')
    }
}

module.exports = {
    getAllMiembros,
    deleteGremio,
    updateGremio,
    createGremio,
    searchGremio,
}
//ID,NOMBRE,CASAS,CANTIDAD,STATUS