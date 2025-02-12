const {request,response} =require("express");


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
        id: gremios.length + 1,
        nombre:req.body.nombre,
        casas: req.body.casas,
        cantidad: req.body.cantidad,
        status: true
    }
    gremios.push(nuevoGremio)
    res.status(201).json(nuevoGremio);
}

const updateGremio = async(req,res)=>{
    const id = Number(req.params.id)
    const index = gremios.findIndex(gremio => gremio.id === id)
    if(index === -1 )
        return res.status(400).json({message:'Error'})
    const updateGremio={
        id:gremios[id].id,
        nombre:req.body.nombre,
        casas: req.body.casas,
        cantidad: req.body.cantidad,
        status: true
    }
    gremios[index] = updateGremio
    res.status(200).json('update')
}

const deleteGremio = async(res,req)=>{
    const id = Number(req.params.id);
    const index = gremios.findIndex(gremio => gremio.id === id)
    if(index === -1)
        return res.status(400).json({message:'Error'})
    gremio.splice(index,1)
    res.status(200).json({message:'Eliminado'})
}

const getAllMiembros = async(res,req)=>{
    const{id}=req.body
}

const getGremios=async(res,req)=>{
    try{
        res.status(200).json(gremios)
    } catch (error){
        console.error('Error al obtener gremios', error)
        res.status(500).json({message:'Error'})
    }
}

module.exports = {
    getAllMiembros,
    deleteGremio,
    updateGremio,
    createGremio,
    searchGremio,
    getGremios
}
//ID,NOMBRE,CASAS,CANTIDAD,STATUS