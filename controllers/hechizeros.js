const {request,response} =require("express");

const searchHechizero = async(req,res)=>{
    const id = Number(req.params.id);
    const hechizero = find(hechizero => hechizero.id === id);
    if(!hechizero){
        return res.status(400).json({message:'Error'})
    }
    res.json(hechizero)
}

const createHechizero = async(req,res)=>{
    const nuevohechizero = {
        id: hechizero.length + 1,
        nombre:req.body.nombre,
        direccion: req.body.direccion,
        magia: req.body.magia,
        status: true
    }
    hechizero.push(nuevohechizero)
    res.status(201).json(nuevohechizero);
}

const updateHechizero = async(req,res)=>{
    const id = Number(req.params.id)
    const index = findIndex(hechizero => hechizero.id === id)
    const updatehechizero={
        id:hechizero[id].id,
        nombre:req.body.nombre,
        direccion: req.body.direccion,
        magia: req.body.magia,
        status: true
    }
    hechizero[index] = updatehechizero
    res.status(200).json('update')
}

const deleteHechizero = async(res,req)=>{
    const id = Number(req.params.id);
    const index = findIndex(hechizero => hechizero.id === id)
    hechizero.splice(index,1)
    res.status(200).json(hechizero)
}

const searchHechizeros = async(req,res)=>{
    res.json(hechizeros)
}

module.exports = {
    searchHechizeros,
    deleteHechizero,
    updateHechizero,
    createHechizero,
    searchHechizero,
}
//ADD UPDATE DESACTIVAR, SEARCH ALL, SEARCH BY ID, 