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
    try {
        SQL = gremios.map(gremio)
            (console.log())
    } catch (error) {
        
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